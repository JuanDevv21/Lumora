'use client'
import { SERVICIO_OPTIONS } from '@/data/servicios.js'
import styles from './Formulario.module.css'
import { useState } from 'react'

const Formulario = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        empresa: '',
        servicio: SERVICIO_OPTIONS[0].id,
        detalles: ''
    })

    const [estadoEnvio, setEstadoEnvio] = useState('')

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setEstadoEnvio('Enviando...')

        try {
            const respuesta = await fetch('/api/contacto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            if (respuesta.ok) {
                setEstadoEnvio('Mensaje enviado con exito')
                setFormData({
                nombre: '',
                email: '',
                empresa: '',
                servicio: 'No estoy seguro',
                detalles: ''
            })
            } else {
                setEstadoEnvio('Hubo un error al enviar')
            }
        } catch(error) {
            setEstadoEnvio('Mo se pudo conectar con el servidor')
        }
    }
    return (
        <>
            <div className={styles.contenedor}>
                <form onSubmit={handleSubmit}>
                <div className={styles.section1}>
                    <div className={styles.campos}>
                        <label>Nombre</label>
                        <input type='text'
                        id='nombre'
                        name='nombre'
                        value={formData.nombre}
                        onChange={handleChange}
                        required></input>
                    </div>
                    <div className={styles.campos}>
                        <label>Email</label>
                        <input type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required></input>
                    </div>
                </div>
                <div className={styles.campos}>
                    <label>Empresa</label>
                    <input type='text'
                    name='empresa'
                    id='empresa'
                    value={formData.empresa}
                    onChange={handleChange}></input>
                </div>
                <div className={styles.campos}>
                    <label>Servicio de interes</label>
                    <select name='servicio' value={formData.servicio} onChange={handleChange}>
                        {SERVICIO_OPTIONS.map((opcion) => (
                            <option value={opcion.id} key={opcion.id}>{opcion.label}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.campos}>
                    <label>Detalles sobre tu proyecto</label>
                    <textarea
                    id='detalles'
                    name='detalles'
                    value={formData.detalles}
                    onChange={handleChange}></textarea>
                </div>

                <button className={styles.sendbtn} type='submit'>Enviar mensaje</button>
                {estadoEnvio && <p>{estadoEnvio}</p>}
            </form>
            </div>
        </>
    )
}

export default Formulario 