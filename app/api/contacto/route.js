import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
    const body = await request.json();
    const { nombre, email, empresa, servicio, detalles } = body;

    if (!nombre || !email) {
        return NextResponse.json({ error: "Faltan campos obligatorios (Nombre o Email)" }, { status: 400 });
    }

    const data = await resend.emails.send({
        from: 'Contacto Web <onboarding@resend.dev>',
        to: 'lumoraclientsupport@gmail.com',
            subject: `🚨 Nuevo lead: ${nombre} interesado en ${servicio}`,
        html: `
        <h2>¡Tienes un nuevo mensaje desde el formulario de contacto!</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email de contacto:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${empresa || 'No especificada'}</p>
        <p><strong>Servicio de interés:</strong> ${servicio}</p>
        <p><strong>Detalles del proyecto:</strong></p>
        <p style="background: #f4f4f4; padding: 15px; border-radius: 5px;">${detalles || 'Sin detalles adicionales'}</p>
        `,
    });

    return NextResponse.json({ mensaje: "Correo enviado con éxito", data }, { status: 200 });

    } catch (error) {
    console.error("Error enviando el correo:", error);
    return NextResponse.json({ error: "No se pudo enviar el correo" }, { status: 500 });
    }
}