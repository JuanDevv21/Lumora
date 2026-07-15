import { createHash } from 'node:crypto'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { SERVICIO_OPTIONS } from '@/data/servicios'

export const runtime = 'nodejs'

const MAX_BODY_BYTES = 25_000
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5
const MIN_FORM_COMPLETION_MS = 1_000
const allowedServices = new Set(SERVICIO_OPTIONS.map(({ id }) => id))
const rateLimitStore = new Map()

let resendClient

function getResend() {
  if (!process.env.RESEND_API_KEY) return null
  if (!resendClient) resendClient = new Resend(process.env.RESEND_API_KEY)
  return resendClient
}

function json(payload, status = 200, headers = {}) {
  return NextResponse.json(payload, {
    status,
    headers: { 'Cache-Control': 'no-store', ...headers },
  })
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function getClientKey(request) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  const ip = forwardedFor?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown'
  return createHash('sha256').update(`${process.env.RATE_LIMIT_SALT || 'lumora'}:${ip}`).digest('hex')
}

function checkRateLimit(clientKey) {
  const now = Date.now()

  if (rateLimitStore.size > 1_000) {
    for (const [key, value] of rateLimitStore) {
      if (value.resetAt <= now) rateLimitStore.delete(key)
    }
  }

  const current = rateLimitStore.get(clientKey)
  if (!current || current.resetAt <= now) {
    rateLimitStore.set(clientKey, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return { allowed: true }
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1_000)),
    }
  }

  current.count += 1
  return { allowed: true }
}

function isAllowedOrigin(request) {
  const origin = request.headers.get('origin')
  if (!origin) return true

  try {
    const requestUrl = new URL(request.url)
    const host = request.headers.get('x-forwarded-host') || request.headers.get('host')
    const protocol = request.headers.get('x-forwarded-proto') || requestUrl.protocol.replace(':', '')

    if (!host) return false
    return new URL(origin).origin === `${protocol}://${host}`
  } catch {
    return false
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !/[\r\n]/.test(email)
}

export async function POST(request) {
  try {
    if (!isAllowedOrigin(request)) {
      return json({ error: 'Origen de solicitud no permitido.' }, 403)
    }

    if (!request.headers.get('content-type')?.includes('application/json')) {
      return json({ error: 'El contenido debe enviarse como JSON.' }, 415)
    }

    const declaredLength = Number(request.headers.get('content-length'))
    if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
      return json({ error: 'La solicitud excede el tamaño permitido.' }, 413)
    }

    const rateLimit = checkRateLimit(getClientKey(request))
    if (!rateLimit.allowed) {
      return json(
        { error: 'Has realizado varios intentos. Espera unos minutos antes de volver a enviar.' },
        429,
        { 'Retry-After': String(rateLimit.retryAfter) },
      )
    }

    const rawBody = await request.text()
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return json({ error: 'La solicitud excede el tamaño permitido.' }, 413)
    }

    let body
    try {
      body = JSON.parse(rawBody)
    } catch {
      return json({ error: 'El contenido enviado no es válido.' }, 400)
    }

    const {
      nombre,
      email,
      empresa,
      servicio,
      detalles,
      autorizacion,
      website,
      iniciadoEn,
    } = body

    // Campo señuelo: los visitantes no lo ven, pero muchos bots lo completan.
    if (typeof website === 'string' && website.trim()) {
      return json({ message: 'Mensaje recibido.' })
    }

    const startedAt = Number(iniciadoEn)
    if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FORM_COMPLETION_MS) {
      return json({ error: 'Espera un momento antes de enviar el formulario.' }, 400)
    }

    if (typeof nombre !== 'string' || typeof email !== 'string' || !nombre.trim() || !email.trim()) {
      return json({ error: 'Nombre y correo son obligatorios.' }, 400)
    }

    if (!isValidEmail(email.trim())) {
      return json({ error: 'Ingresa un correo electrónico válido.' }, 400)
    }

    if (autorizacion !== true) {
      return json({ error: 'Debes autorizar el tratamiento de datos para enviar la solicitud.' }, 400)
    }

    if (!allowedServices.has(servicio)) {
      return json({ error: 'Selecciona un servicio válido.' }, 400)
    }

    if (
      nombre.length > 120 ||
      email.length > 254 ||
      String(empresa || '').length > 160 ||
      String(detalles || '').length > 3_000
    ) {
      return json({ error: 'Uno o más campos exceden la longitud permitida.' }, 400)
    }

    const resend = getResend()
    if (!resend) {
      console.error('Formulario de contacto no configurado: falta RESEND_API_KEY.')
      return json({ error: 'El canal de contacto no está disponible temporalmente.' }, 503)
    }

    const plainNombre = nombre.trim().replace(/[\r\n]+/g, ' ')
    const plainEmail = email.trim()
    const safeNombre = escapeHtml(plainNombre)
    const safeEmail = escapeHtml(plainEmail)
    const safeEmpresa = escapeHtml(String(empresa || 'No especificada').trim())
    const safeServicio = escapeHtml(SERVICIO_OPTIONS.find(({ id }) => id === servicio)?.label)
    const safeDetalles = escapeHtml(String(detalles || 'Sin detalles adicionales').trim())
    const fechaAutorizacion = new Date().toISOString()

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || 'Lumora Web <onboarding@resend.dev>',
      to: process.env.CONTACT_TO_EMAIL || 'lumoraclientsupport@gmail.com',
      replyTo: plainEmail,
      subject: `Nuevo contacto: ${plainNombre} · ${safeServicio}`,
      html: `
        <h2>Nuevo mensaje desde el sitio de Lumora</h2>
        <p><strong>Nombre:</strong> ${safeNombre}</p>
        <p><strong>Correo:</strong> ${safeEmail}</p>
        <p><strong>Empresa:</strong> ${safeEmpresa}</p>
        <p><strong>Servicio:</strong> ${safeServicio}</p>
        <p><strong>Contexto del proyecto:</strong></p>
        <p style="background:#f4f4f4;padding:15px;border-radius:8px;white-space:pre-wrap;">${safeDetalles}</p>
        <hr />
        <p><strong>Autorización de tratamiento:</strong> Sí</p>
        <p><strong>Fecha de autorización:</strong> ${fechaAutorizacion}</p>
      `,
    })

    if (error) {
      console.error('Resend rechazó el mensaje del formulario:', error.name || 'error desconocido')
      return json({ error: 'No se pudo entregar el mensaje.' }, 502)
    }

    return json({ message: 'Mensaje enviado.', id: data?.id })
  } catch (error) {
    console.error('Error procesando el formulario de contacto:', error)
    return json({ error: 'No se pudo enviar el correo.' }, 500)
  }
}
