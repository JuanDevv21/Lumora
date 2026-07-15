import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Blocks,
  BotMessageSquare,
  CheckCircle2,
  CircleCheck,
  Code2,
  Compass,
  FileSearch,
  Layers3,
  Mail,
  MapPin,
  PenTool,
  Rocket,
  Route,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import Formulario from '@/components/Formulario'
import styles from './page.module.css'

const services = [
  {
    number: '01',
    slug: 'software-a-medida',
    icon: Blocks,
    title: 'Software a medida',
    description: 'Creamos herramientas alrededor de tu operación, sin obligar a tu equipo a adaptarse a un producto genérico.',
    items: ['Plataformas y aplicaciones web', 'Portales y herramientas internas', 'Modernización de sistemas'],
  },
  {
    number: '02',
    slug: 'automatizacion-e-integraciones',
    icon: Workflow,
    title: 'Automatización e integraciones',
    description: 'Conectamos tareas, datos y sistemas para reducir trabajo repetitivo y mejorar la trazabilidad.',
    items: ['Automatización de procesos', 'Integraciones mediante API', 'Flujos de aprobación y control'],
  },
  {
    number: '03',
    slug: 'inteligencia-artificial-aplicada',
    icon: BotMessageSquare,
    title: 'Inteligencia artificial aplicada',
    description: 'Integramos IA cuando existe un proceso, un objetivo y una forma clara de medir el resultado.',
    items: ['Agentes y asistentes internos', 'Búsqueda y extracción de información', 'IA integrada en software existente'],
  },
  {
    number: '04',
    slug: 'consultoria-tecnologica',
    icon: Compass,
    title: 'Consultoría y evolución',
    description: 'Analizamos procesos, riesgos y opciones antes de comprometer una solución tecnológica.',
    items: ['Diagnóstico y arquitectura', 'Diseño de producto digital', 'Auditoría y modernización'],
  },
]

const method = [
  { number: '01', title: 'Comprender', text: 'Conocemos el negocio, las personas, el proceso actual y sus restricciones.', icon: FileSearch },
  { number: '02', title: 'Diagnosticar', text: 'Analizamos causas, riesgos, dependencias, datos y oportunidades.', icon: Route },
  { number: '03', title: 'Diseñar', text: 'Definimos flujos, experiencia y arquitectura antes de construir.', icon: PenTool },
  { number: '04', title: 'Construir', text: 'Desarrollamos por iteraciones, priorizando primero el valor más importante.', icon: Code2 },
  { number: '05', title: 'Validar', text: 'Probamos funcionamiento, integraciones, experiencia y aceptación.', icon: CircleCheck },
  { number: '06', title: 'Implementar', text: 'Publicamos, documentamos, capacitamos y planeamos la evolución.', icon: Rocket },
]

const differentiators = [
  {
    icon: Layers3,
    title: 'Comprensión antes que desarrollo',
    text: 'Cada proyecto comienza analizando el problema, los usuarios, el proceso y los objetivos.',
  },
  {
    icon: CheckCircle2,
    title: 'Entregas progresivas',
    text: 'Trabajamos por etapas, con demostraciones y validaciones frecuentes.',
  },
  {
    icon: ShieldCheck,
    title: 'Tecnología responsable',
    text: 'Consideramos seguridad, privacidad, accesibilidad, documentación y sostenibilidad técnica.',
  },
]

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className={styles.hero} id="inicio">
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>Estudio de software y consultoría tecnológica</p>
                <h1>Transformamos procesos complejos en <span>soluciones digitales claras.</span></h1>
                <p className={styles.heroText}>Software a medida, automatización e inteligencia artificial para empresas en Colombia, diseñados alrededor de su operación real.</p>
                <div className={styles.heroActions}>
                  <Link className={styles.primaryButton} href="/contacto">
                    Cuéntanos tu proyecto <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <Link className={styles.secondaryButton} href="#servicios">Explorar servicios</Link>
                </div>
                <p className={styles.heroNote}><Sparkles size={16} aria-hidden="true" /> Claridad desde el diagnóstico hasta la implementación.</p>
              </div>

              <div className={styles.heroVisual} aria-label="Proceso de Lumora: comprender, conectar y evolucionar">
                <div className={styles.visualHeader}>
                  <span>Del proceso real</span>
                  <Image src="/brand/isotipo/lumora-isotipo-color.svg" alt="Isotipo de Lumora" width={58} height={58} priority />
                </div>
                <div className={styles.visualFlow}>
                  <div>
                    <span className={styles.flowIcon}><FileSearch size={20} /></span>
                    <p>Comprender</p>
                    <small>Personas, operación y objetivos</small>
                  </div>
                  <ArrowRight className={styles.flowArrow} size={20} aria-hidden="true" />
                  <div>
                    <span className={styles.flowIcon}><Workflow size={20} /></span>
                    <p>Conectar</p>
                    <small>Datos, tareas y sistemas</small>
                  </div>
                  <ArrowRight className={styles.flowArrow} size={20} aria-hidden="true" />
                  <div>
                    <span className={styles.flowIcon}><Rocket size={20} /></span>
                    <p>Evolucionar</p>
                    <small>Resultados que pueden crecer</small>
                  </div>
                </div>
                <div className={styles.visualResult}>
                  <CheckCircle2 size={20} aria-hidden="true" />
                  <div>
                    <span>Una solución clara</span>
                    <small>Útil, mantenible y orientada a resultados.</small>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.principles} aria-label="Principios de trabajo">
              <p><span>01</span> Comprensión del negocio</p>
              <p><span>02</span> Diseño de producto</p>
              <p><span>03</span> Ingeniería de software</p>
            </div>
          </div>
        </section>

        <section className={styles.section} id="servicios">
          <div className={styles.container}>
            <div className={styles.sectionIntro}>
              <div>
                <p className={styles.eyebrow}>Servicios</p>
                <h2>Tecnología útil para problemas reales.</h2>
              </div>
              <p>La conversación comienza por la fricción del negocio, no por una lista de tecnologías. Diseñamos la solución adecuada para el contexto, el equipo y el objetivo.</p>
            </div>

            <div className={styles.serviceGrid}>
              {services.map(({ number, slug, icon: Icon, title, description, items }) => (
                <article className={styles.serviceCard} key={number}>
                  <div className={styles.serviceTop}>
                    <span className={styles.iconBox}><Icon size={24} strokeWidth={1.8} aria-hidden="true" /></span>
                    <span className={styles.cardNumber}>{number}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <ul>
                    {items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <Link className={styles.serviceLink} href={`/servicios/${slug}`}>
                    Conocer el servicio <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.trustSection} id="por-que">
          <div className={styles.container}>
            <div className={styles.trustGrid}>
              <div className={styles.trustCopy}>
                <p className={styles.eyebrowLight}>Por qué Lumora</p>
                <h2>El cuidado de un estudio.<br /><span>El rigor de la ingeniería.</span></h2>
                <p>Combinamos comprensión del negocio, diseño de producto e ingeniería de software para construir soluciones claras, mantenibles y orientadas a resultados.</p>
                <Link className={styles.lightLink} href="#metodo">Conoce nuestro método <ArrowRight size={18} /></Link>
              </div>

              <div className={styles.differentiatorList}>
                {differentiators.map(({ icon: Icon, title, text }, index) => (
                  <article key={title}>
                    <span><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></span>
                    <div>
                      <small>0{index + 1}</small>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="metodo">
          <div className={styles.container}>
            <div className={styles.methodHeader}>
              <div>
                <p className={styles.eyebrow}>Método Lumora</p>
                <h2>Entender antes de diseñar.<br />Validar antes de escalar.</h2>
              </div>
              <p>Un proceso claro permite saber qué sucede en cada etapa, qué decisión sigue y cómo comprobamos el avance.</p>
            </div>

            <div className={styles.methodGrid}>
              {method.map(({ number, title, text, icon: Icon }) => (
                <article className={styles.methodStep} key={number}>
                  <div className={styles.stepTop}>
                    <span>{number}</span>
                    <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.faqSection} id="faq">
          <div className={styles.container}>
            <div className={styles.faqGrid}>
              <div className={styles.faqIntro}>
                <p className={styles.eyebrow}>Preguntas frecuentes</p>
                <h2>Respuestas directas.</h2>
                <p>¿Tienes una pregunta que no aparece aquí? Escríbenos y te responderemos con claridad sobre el siguiente paso.</p>
              </div>
              <FAQ />
            </div>
          </div>
        </section>

        <section className={styles.contactSection} id="contacto">
          <div className={styles.container}>
            <div className={styles.contactPanel}>
              <div className={styles.contactCopy}>
                <p className={styles.eyebrowLight}>Contacto</p>
                <h2>Cuéntanos qué proceso quieres mejorar.</h2>
                <p>Empezaremos por entender el problema y te propondremos un siguiente paso útil: una llamada, un diagnóstico o una recomendación concreta.</p>
                <div className={styles.contactDetails}>
                  <a href="mailto:lumoraclientsupport@gmail.com"><Mail size={19} /> lumoraclientsupport@gmail.com</a>
                  <p><MapPin size={19} /> Cali, Colombia · Atendemos empresas en todo el país</p>
                </div>
              </div>
              <Formulario />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
