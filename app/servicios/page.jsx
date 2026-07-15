import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SERVICES } from '@/data/service-pages'
import { siteUrl } from '@/lib/site'
import styles from './services.module.css'

export const metadata = {
  title: 'Servicios de software, automatización e IA',
  description:
    'Conoce los servicios de Lumora: software a medida, automatización, integraciones, inteligencia artificial aplicada y consultoría tecnológica para empresas en Colombia.',
  alternates: { canonical: '/servicios' },
  openGraph: {
    title: 'Servicios de software, automatización e IA | Lumora',
    description:
      'Soluciones digitales diseñadas alrededor de los procesos reales de empresas en Colombia.',
    url: '/servicios',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Lumora — Software a medida, automatización e inteligencia artificial',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios de software, automatización e IA | Lumora',
    description: 'Soluciones digitales diseñadas alrededor de los procesos reales de empresas en Colombia.',
    images: ['/opengraph-image'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${siteUrl}/servicios` },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c'),
          }}
        />

        <section className={styles.hero}>
          <div className={styles.container}>
            <nav className={styles.breadcrumb} aria-label="Migas de pan">
              <Link href="/">Inicio</Link><ChevronRight size={14} aria-hidden="true" /><span>Servicios</span>
            </nav>
            <p className={styles.eyebrow}>Servicios para empresas en Colombia</p>
            <h1>Tecnología diseñada alrededor de problemas reales.</h1>
            <p className={styles.heroLead}>No comenzamos por una herramienta. Entendemos el proceso, las personas y el resultado esperado para definir si necesitas software, automatización, inteligencia artificial o una decisión más clara.</p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="/contacto">Cuéntanos tu proyecto <ArrowRight size={18} /></Link>
              <Link className={styles.secondaryButton} href="/#metodo">Conoce nuestro método</Link>
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.eyebrow}>Áreas de trabajo</p>
                <h2>Cuatro formas de acompañar la evolución de tu operación.</h2>
              </div>
              <p>Cada servicio tiene un objetivo distinto, pero todos comparten el mismo criterio: claridad antes de complejidad y validación antes de escalar.</p>
            </div>
            <div className={styles.serviceGrid}>
              {SERVICES.map((service, index) => (
                <Link className={styles.serviceCard} href={`/servicios/${service.slug}`} key={service.slug}>
                  <span className={styles.cardNumber}>0{index + 1}</span>
                  <h2>{service.shortTitle}</h2>
                  <p>{service.description}</p>
                  <span className={styles.cardLink}>Explorar servicio <ArrowRight size={17} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.closing}>
              <p className={styles.eyebrow}>Desde Cali para Colombia</p>
              <h2>¿No sabes todavía qué tipo de solución necesitas?</h2>
              <p>Es normal. Podemos comenzar entendiendo el problema y recomendar el siguiente paso más útil, incluso si ese paso no es desarrollar de inmediato.</p>
              <Link className={styles.primaryButton} href="/contacto">Hablar con Lumora <ArrowRight size={18} /></Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
