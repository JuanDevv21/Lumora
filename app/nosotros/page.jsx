import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { siteUrl } from '@/lib/site'
import styles from '../institutional.module.css'

export const metadata = {
  title: 'Nosotros — Estudio de software en Cali',
  description: 'Conoce el enfoque de Lumora, un estudio de software y consultoría tecnológica ubicado en Cali que trabaja con empresas de toda Colombia.',
  alternates: { canonical: '/nosotros' },
  openGraph: {
    title: 'Nosotros — Estudio de software en Cali | Lumora',
    description: 'Comprensión del negocio, diseño de producto e ingeniería para empresas en Colombia.',
    url: '/nosotros',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Lumora — Software a medida, automatización e inteligencia artificial' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nosotros — Estudio de software en Cali | Lumora',
    description: 'Comprensión del negocio, diseño de producto e ingeniería para empresas en Colombia.',
    images: ['/opengraph-image'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Nosotros', item: `${siteUrl}/nosotros` },
      ],
    },
    {
      '@type': 'AboutPage',
      '@id': `${siteUrl}/nosotros/#page`,
      url: `${siteUrl}/nosotros`,
      name: 'Nosotros — Lumora',
      about: { '@id': `${siteUrl}/#organization` },
    },
  ],
}

const values = [
  { title: 'Comprender antes de construir', text: 'Investigamos el proceso, las personas y las restricciones antes de comprometernos con una solución.' },
  { title: 'Explicar las decisiones', text: 'Hacemos visibles las alternativas, los riesgos y las razones detrás de cada recomendación.' },
  { title: 'Construir con responsabilidad', text: 'Consideramos seguridad, privacidad, accesibilidad, documentación y capacidad de evolución.' },
]

const steps = [
  { title: 'Escuchar', text: 'Entendemos el problema desde quienes viven la operación.' },
  { title: 'Delimitar', text: 'Convertimos una necesidad amplia en un objetivo comprobable.' },
  { title: 'Validar', text: 'Probamos decisiones temprano y mostramos avances funcionales.' },
  { title: 'Evolucionar', text: 'Medimos, documentamos y priorizamos el siguiente paso.' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
        <section className={styles.hero}>
          <div className={styles.container}>
            <nav className={styles.breadcrumb} aria-label="Migas de pan"><Link href="/">Inicio</Link><ChevronRight size={14} /><span>Nosotros</span></nav>
            <p className={styles.eyebrow}>Lumora · Cali, Colombia</p>
            <h1>Claridad para convertir tecnología en una decisión útil.</h1>
            <p className={styles.lead}>Lumora es un estudio de software y consultoría tecnológica ubicado en Cali. Trabajamos con empresas de toda Colombia para comprender procesos, diseñar soluciones y construir tecnología que pueda explicarse, mantenerse y evolucionar.</p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="/contacto">Conversemos <ArrowRight size={18} /></Link>
              <Link className={styles.secondaryButton} href="/servicios">Conoce nuestros servicios</Link>
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}><div><p className={styles.eyebrow}>Cómo pensamos</p><h2>La solución comienza entendiendo el problema correcto.</h2></div><p>No buscamos añadir tecnología a cada proceso. Buscamos identificar dónde puede reducir fricción, mejorar una decisión o crear una capacidad que antes no existía.</p></div>
            <div className={styles.valueGrid}>{values.map((value, index) => <article className={styles.valueCard} key={value.title}><span>0{index + 1}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}</div>
          </div>
        </section>

        <section className={styles.sectionDark}>
          <div className={styles.container}>
            <div className={styles.darkGrid}>
              <div><p className={styles.eyebrow}>Relación de trabajo</p><h2>Responsables visibles y conversaciones directas.</h2><p>Antes de iniciar cada proyecto presentamos los roles, las responsabilidades y los canales de comunicación. Las decisiones importantes se conversan con las personas encargadas de analizarlas y ejecutarlas.</p></div>
              <ol className={styles.commitmentList}>
                <li><span>01</span>Alcance, entregables y supuestos definidos antes de construir.</li>
                <li><span>02</span>Avances demostrables y decisiones documentadas durante el proyecto.</li>
                <li><span>03</span>Riesgos, dependencias y cambios comunicados con claridad.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}><div><p className={styles.eyebrow}>Método</p><h2>Un proceso que permite saber qué sigue y por qué.</h2></div><p>La forma exacta cambia según el proyecto, pero mantenemos una secuencia simple para reducir incertidumbre y validar antes de escalar.</p></div>
            <div className={styles.stepGrid}>{steps.map((step, index) => <article className={styles.stepCard} key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}><div className={styles.closing}><h2>Cuéntanos qué proceso quieres mejorar.</h2><p>Podemos comenzar con una conversación breve para entender el contexto y definir si existe un siguiente paso útil.</p><Link className={styles.primaryButton} href="/contacto">Hablar con Lumora <ArrowRight size={18} /></Link></div></div>
        </section>
      </main>
      <Footer />
    </>
  )
}
