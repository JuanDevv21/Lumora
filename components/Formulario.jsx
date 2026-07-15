'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SERVICIO_OPTIONS } from '@/data/servicios'
import styles from './Formulario.module.css'

const initialForm = {
  nombre: '',
  email: '',
  empresa: '',
  servicio: SERVICIO_OPTIONS[0].id,
  detalles: '',
  autorizacion: false,
  website: '',
}

export default function Formulario() {
  const [formData, setFormData] = useState(initialForm)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [sending, setSending] = useState(false)
  const startedAt = useRef(0)

  useEffect(() => {
    startedAt.current = Date.now()
  }, [])

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormData((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSending(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, iniciadoEn: startedAt.current }),
      })

      const result = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(result.error || 'No se pudo enviar el formulario')

      setFormData(initialForm)
      startedAt.current = Date.now()
      setStatus({ type: 'success', message: 'Recibimos tu mensaje. Te contactaremos con el siguiente paso.' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'No pudimos enviar el mensaje. Tu información sigue en pantalla; inténtalo de nuevo.',
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="website">Sitio web</label>
          <input
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            autoComplete="off"
            tabIndex={-1}
          />
        </div>
        <div className={styles.formHeader}>
          <span>Inicia la conversación</span>
          <p>Cuéntanos lo esencial. Los campos opcionales están indicados.</p>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} autoComplete="name" maxLength={120} required />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Correo electrónico</label>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} autoComplete="email" maxLength={254} required />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="empresa">Empresa <span>Opcional</span></label>
          <input id="empresa" name="empresa" value={formData.empresa} onChange={handleChange} autoComplete="organization" maxLength={160} />
        </div>

        <div className={styles.field}>
          <label htmlFor="servicio">¿En qué podemos ayudarte?</label>
          <select id="servicio" name="servicio" value={formData.servicio} onChange={handleChange}>
            {SERVICIO_OPTIONS.map((option) => <option value={option.id} key={option.id}>{option.label}</option>)}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="detalles">Contexto del proyecto <span>Opcional</span></label>
          <textarea id="detalles" name="detalles" value={formData.detalles} onChange={handleChange} rows={5} maxLength={3000} placeholder="¿Qué proceso quieres mejorar y qué resultado esperas?" />
        </div>

        <label className={styles.consent} htmlFor="autorizacion">
          <input id="autorizacion" name="autorizacion" type="checkbox" checked={formData.autorizacion} onChange={handleChange} required />
          <span>He leído la <Link href="/politica-de-privacidad" target="_blank" rel="noreferrer">Política de privacidad</Link> y autorizo a Lumora a tratar mis datos para responder y dar seguimiento a esta solicitud.</span>
        </label>

        <button className={styles.submit} type="submit" disabled={sending}>
          {sending ? 'Enviando…' : 'Enviar mensaje'} {!sending && <ArrowRight size={18} aria-hidden="true" />}
        </button>

        {status.message && <p className={`${styles.status} ${styles[status.type]}`} role="status">{status.message}</p>}
      </form>
    </div>
  )
}
