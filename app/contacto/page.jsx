import Link from 'next/link'
import { ChevronRight, Mail, MapPin, Route } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Formulario from '@/components/Formulario'
import { siteConfig, siteUrl } from '@/lib/site'
import styles from '../institutional.module.css'

export const metadata = {
  title: 'Contacto',
  description: 'Cuéntanos qué proceso quieres mejorar. Lumora atiende empresas en toda Colombia desde Cali mediante software, automatización, IA y consultoría.',
  alternates: { canonical: '/contacto' },
  openGraph: {
    title: 'Contacto | Lumora',
    description: 'Conversemos sobre el proceso, sistema o decisión tecnológica que necesitas mejorar.',
    url: '/contacto',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Lumora — Software a medida, automatización e inteligencia artificial' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto | Lumora',
    description: 'Conversemos sobre el proceso, sistema o decisión tecnológica que necesitas mejorar.',
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
        { '@type': 'ListItem', position: 2, name: 'Contacto', item: `${siteUrl}/contacto` },
      ],
    },
    {
      '@type': 'ContactPage',
      '@id': `${siteUrl}/contacto/#page`,
      url: `${siteUrl}/contacto`,
      name: 'Contacto — Lumora',
      about: { '@id': `${siteUrl}/#organization` },
    },
  ],
}

const expectations = [
  { title: 'Leemos el contexto', text: 'Revisamos el problema, el servicio seleccionado y la información que compartas.' },
  { title: 'Aclaramos lo necesario', text: 'Si existe encaje, proponemos una conversación o solicitamos los datos indispensables para evaluar.' },
  { title: 'Definimos el siguiente paso', text: 'Puede ser un diagnóstico, una recomendación, una estimación inicial o la decisión de no desarrollar todavía.' },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
        <section className={styles.hero}>
          <div className={styles.container}>
            <nav className={styles.breadcrumb} aria-label="Migas de pan"><Link href="/">Inicio</Link><ChevronRight size={14} /><span>Contacto</span></nav>
            <p className={styles.eyebrow}>Contacto</p>
            <h1>Empecemos por entender el problema.</h1>
            <p className={styles.lead}>Cuéntanos qué está ocurriendo, a quién afecta y qué resultado esperas. No necesitas llegar con una solución definida.</p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contactGrid}>
              <div className={styles.contactIntro}>
                <p className={styles.eyebrow}>Hablemos</p>
                <h2>Una conversación clara desde el primer contacto.</h2>
                <p>Usaremos la información únicamente para revisar tu solicitud, responderte y dar seguimiento a la conversación comercial que inicies.</p>
                <div className={styles.contactDetails}>
                  <a href={`mailto:${siteConfig.email}`}><Mail size={19} />{siteConfig.email}</a>
                  <p><MapPin size={19} />Cali, Valle del Cauca, Colombia</p>
                  <p><Route size={19} />Atención remota para empresas en todo el país</p>
                </div>
              </div>
              <Formulario />
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}><div><p className={styles.eyebrow}>Qué sucede después</p><h2>Un siguiente paso útil, no una respuesta automática.</h2></div><p>La información del formulario nos permite preparar mejor la primera conversación y evitar pedirte datos que ya compartiste.</p></div>
            <div className={styles.expectGrid}>{expectations.map((item) => <article className={styles.expectCard} key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
