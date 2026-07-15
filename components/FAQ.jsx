'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import styles from './FAQ.module.css'

const faqs = [
  { id: 1, question: '¿Qué tamaño de proyectos desarrollan?', answer: 'Trabajamos desde automatizaciones puntuales hasta plataformas que requieren varios meses de desarrollo. Primero evaluamos el problema, el alcance y si nuestro equipo es el adecuado para resolverlo.' },
  { id: 2, question: '¿Qué pasa si mi empresa no está en Colombia?', answer: 'Colaboramos de forma remota con equipos de Colombia, Latinoamérica y otros mercados. Definimos desde el inicio horarios, canales y rituales de comunicación.' },
  { id: 3, question: '¿Cómo estiman la inversión de un proyecto?', answer: 'Después del descubrimiento proponemos el modelo más adecuado: precio fijo para alcances definidos, acompañamiento mensual para evolución continua o trabajo por etapas para fases exploratorias.' },
  { id: 4, question: '¿Cómo manejan la información sensible?', answer: 'Podemos firmar un acuerdo de confidencialidad antes de compartir información sensible y definimos accesos, tratamiento de datos y responsabilidades de acuerdo con el riesgo del proyecto.' },
  { id: 5, question: '¿Qué ocurre después del lanzamiento?', answer: 'Entregamos código, documentación y accesos acordados. También podemos acompañar la estabilización, el soporte y la evolución mediante un plan definido con claridad.' },
]

export default function FAQ() {
  const [activeId, setActiveId] = useState(1)

  return (
    <div className={styles.list}>
      {faqs.map((faq) => {
        const expanded = activeId === faq.id
        const panelId = `faq-panel-${faq.id}`
        return (
          <article className={styles.item} key={faq.id}>
            <h3>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setActiveId(expanded ? null : faq.id)}
              >
                <span>{faq.question}</span>
                <ChevronDown className={expanded ? styles.rotated : ''} size={20} aria-hidden="true" />
              </button>
            </h3>
            {expanded && <div className={styles.answer} id={panelId}><p>{faq.answer}</p></div>}
          </article>
        )
      })}
    </div>
  )
}
