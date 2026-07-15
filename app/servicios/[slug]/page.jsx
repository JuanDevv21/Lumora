import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SERVICE_BY_SLUG, SERVICES } from '@/data/service-pages'
import { siteConfig, siteUrl } from '@/lib/site'
import styles from '../services.module.css'

export function generateStaticParams() {
  return SERVICES.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = SERVICE_BY_SLUG[slug]

  if (!service) return {}

  const path = `/servicios/${service.slug}`

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      url: path,
      title: `${service.title} | Lumora`,
      description: service.description,
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
      title: `${service.title} | Lumora`,
      description: service.description,
      images: ['/opengraph-image'],
    },
  }
}

export default async function ServicePage({ params }) {
  const { slug } = await params
  const service = SERVICE_BY_SLUG[slug]

  if (!service) notFound()

  const relatedServices = SERVICES.filter(({ slug: relatedSlug }) => relatedSlug !== slug).slice(0, 3)
  const serviceUrl = `${siteUrl}/servicios/${service.slug}`
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${siteUrl}/servicios` },
          { '@type': 'ListItem', position: 3, name: service.shortTitle, item: serviceUrl },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${serviceUrl}/#service`,
        name: service.shortTitle,
        description: service.description,
        url: serviceUrl,
        areaServed: { '@type': 'Country', name: siteConfig.market },
        provider: { '@id': `${siteUrl}/#organization` },
      },
    ],
  }

  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
          }}
        />

        <section className={styles.detailHero}>
          <div className={styles.container}>
            <nav className={styles.breadcrumb} aria-label="Migas de pan">
              <Link href="/">Inicio</Link><ChevronRight size={14} aria-hidden="true" />
              <Link href="/servicios">Servicios</Link><ChevronRight size={14} aria-hidden="true" />
              <span>{service.shortTitle}</span>
            </nav>
            <div className={styles.detailHeroGrid}>
              <div>
                <p className={styles.eyebrow}>Servicio · Colombia</p>
                <h1>{service.title}</h1>
                <p className={styles.detailLead}>{service.intro}</p>
                <div className={styles.actions}>
                  <Link className={styles.primaryButton} href="/contacto">Conversemos sobre tu proceso <ArrowRight size={18} /></Link>
                  <Link className={styles.secondaryButton} href="/servicios">Ver todos los servicios</Link>
                </div>
              </div>
              <aside className={styles.fitCard} aria-label="Cuándo puede ser útil este servicio">
                <h2>Puede ser adecuado si…</h2>
                <ul>{service.idealFor.map((item) => <li key={item}>{item}</li>)}</ul>
              </aside>
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div><p className={styles.eyebrow}>El punto de partida</p><h2>Problemas que conviene entender antes de construir.</h2></div>
              <p>La misma tecnología puede producir resultados muy diferentes según el proceso, los datos y las personas involucradas.</p>
            </div>
            <div className={styles.problemGrid}>
              {service.problems.map((problem, index) => (
                <article className={styles.problemCard} key={problem.title}>
                  <span>0{index + 1}</span><h3>{problem.title}</h3><p>{problem.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div><p className={styles.eyebrow}>Alcance</p><h2>Cómo puede ayudar Lumora.</h2></div>
              <p>El alcance final se define después del diagnóstico. Estas son capacidades habituales, no un paquete cerrado ni una lista obligatoria.</p>
            </div>
            <div className={styles.capabilityGrid}>
              {service.capabilities.map((capability, index) => (
                <article className={styles.capabilityCard} key={capability.title}>
                  <span>0{index + 1}</span><h3>{capability.title}</h3><p>{capability.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionDark}>
          <div className={styles.container}>
            <div className={styles.darkGrid}>
              <div><p className={styles.eyebrow}>Resultado buscado</p><h2>Claridad operativa, no tecnología por sí sola.</h2><p className={styles.promise}>{service.promise}</p></div>
              <ol className={styles.outcomeList}>
                {service.outcomes.map((outcome, index) => <li key={outcome}><span>0{index + 1}</span>{outcome}</li>)}
              </ol>
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div><p className={styles.eyebrow}>Proceso de trabajo</p><h2>Avanzamos por etapas que se pueden explicar y validar.</h2></div>
              <p>Trabajamos desde Cali con empresas de toda Colombia mediante sesiones remotas, documentación compartida y demostraciones frecuentes.</p>
            </div>
            <div className={styles.processGrid}>
              {service.process.map((step, index) => (
                <article className={styles.processStep} key={step.title}>
                  <span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div><p className={styles.eyebrow}>Preguntas frecuentes</p><h2>Lo que conviene aclarar antes de empezar.</h2></div>
            </div>
            <div className={styles.faqList}>
              {service.faqs.map(({ question, answer }) => (
                <details key={question}><summary>{question}</summary><p>{answer}</p></details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div><p className={styles.eyebrow}>También podemos ayudarte con</p><h2>Servicios relacionados.</h2></div>
            </div>
            <div className={styles.relatedGrid}>
              {relatedServices.map((related) => (
                <Link className={styles.relatedCard} href={`/servicios/${related.slug}`} key={related.slug}>
                  <h3>{related.shortTitle}</h3><p>{related.description}</p>
                  <span className={styles.cardLink}>Explorar <ArrowRight size={17} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.closing}>
              <p className={styles.eyebrow}>Un siguiente paso claro</p>
              <h2>Cuéntanos qué está frenando tu operación.</h2>
              <p>Comenzaremos por entender el contexto y te diremos si este servicio encaja, qué información falta y cuál sería una primera etapa razonable.</p>
              <Link className={styles.primaryButton} href="/contacto">Hablar con Lumora <ArrowRight size={18} /></Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
