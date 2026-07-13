'use client'
import { useState } from 'react'
import styles from './FAQ.module.css'

const faqs = [
    {id: 1, pregunta: '¿Que tamaño de proyectos desarrollan?', respuesta: 'Desde automatizaciones de dos semanas hasta plataformas que requieren meses de desarrollo. Si el proyecto encaja con nuestro equipo y podemos realizar un trabajo excelente, aceptaremos; de lo contrario, te ofreceremos una recomendación honesta.'},
    {id: 2, pregunta: '¿Que pasa si no soy de Colombia?', respuesta: 'Tenemos nuestra sede en Colombia pero colaboramos de forma remota con equipos de toda América y Europa. Trabajamos en inglés y español.'},
    {id: 3, pregunta: '¿Como estiman los precios de mi proyecto?', respuesta: 'Precio fijo para proyectos bien definidos, igualas mensuales para trabajos continuos y modalidad de tiempo y materiales para fases exploratorias. Recomendamos la opción más adecuada tras la fase de descubrimiento.'},
    {id: 4, pregunta: '¿Como manejan la informacion sensible de mi empresa?', respuesta: 'Firmamos un acuerdo de confidencialidad antes de compartir cualquier información sensible, y podemos trabajar bajo el suyo o proporcionar uno propio.'},
    {id: 5, pregunta: '¿Que pasa despues del lanzamiento?', respuesta: 'Usted conserva el código, la documentación y la infraestructura. Ofrecemos contratos de soporte opcionales, pero nunca queda atado a nosotros.'}
]

const FAQ = () => {
    const [idActivo, setIdActivo] = useState('null')
    const toggleFAQ = (id) => {
        if(idActivo === id) {
            setIdActivo(null)
        } else {
            setIdActivo(id)
        }
    }

    return (
        <>
            <div>
                {faqs.map((faq) => (
                    <div className={styles.buttonq}>
                        <button onClick={() => toggleFAQ(faq.id)}>
                            {faq.pregunta}
                        </button>
                        {idActivo === faq.id && (
                            <p>{faq.respuesta}</p>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}

export default FAQ