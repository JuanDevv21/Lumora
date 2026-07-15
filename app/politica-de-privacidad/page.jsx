import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { siteConfig } from '@/lib/site'
import styles from '../institutional.module.css'

export const metadata = {
  title: 'Política de privacidad y tratamiento de datos',
  description: 'Consulta cómo Lumora recopila, utiliza, protege y permite ejercer derechos sobre los datos personales enviados mediante su sitio web.',
  alternates: { canonical: '/politica-de-privacidad' },
  openGraph: {
    title: 'Política de privacidad y tratamiento de datos | Lumora',
    description: 'Consulta cómo Lumora trata los datos personales enviados mediante su sitio web.',
    url: '/politica-de-privacidad',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Lumora — Software a medida, automatización e inteligencia artificial' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Política de privacidad y tratamiento de datos | Lumora',
    description: 'Consulta cómo Lumora trata los datos personales enviados mediante su sitio web.',
    images: ['/opengraph-image'],
  },
}

const sections = [
  ['responsable', 'Responsable'],
  ['datos', 'Datos recopilados'],
  ['finalidades', 'Finalidades'],
  ['autorizacion', 'Autorización'],
  ['proveedores', 'Proveedores'],
  ['conservacion', 'Conservación'],
  ['derechos', 'Derechos'],
  ['seguridad', 'Seguridad'],
  ['cookies', 'Cookies'],
  ['cambios', 'Cambios'],
]

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <nav className={styles.breadcrumb} aria-label="Migas de pan"><Link href="/">Inicio</Link><ChevronRight size={14} /><span>Política de privacidad</span></nav>
            <p className={styles.eyebrow}>Última actualización · 14 de julio de 2026</p>
            <h1>Política de privacidad y tratamiento de datos personales.</h1>
            <p className={styles.lead}>Esta política explica qué información recopila Lumora a través de este sitio, para qué la utiliza y cómo pueden las personas ejercer sus derechos.</p>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.legalLayout}>
              <nav className={styles.legalNav} aria-label="Contenido de la política"><strong>Contenido</strong>{sections.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav>
              <article className={styles.legalContent}>
                <p className={styles.legalNotice}>Esta política describe el tratamiento realizado actualmente por el formulario de contacto. Si en el futuro se incorporan analítica, publicidad, cuentas de usuario u otras formas de recolección, la política y los mecanismos de autorización deberán actualizarse antes de activarlas.</p>

                <section className={styles.legalSection} id="responsable">
                  <h2>1. Responsable del tratamiento</h2>
                  <p><strong>Lumora</strong>, estudio de software y consultoría tecnológica con domicilio en Cali, Colombia, es responsable del tratamiento descrito en esta política.</p>
                  <ul><li>Correo de privacidad y atención: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li><li>Área geográfica de operación: Colombia.</li></ul>
                </section>

                <section className={styles.legalSection} id="datos">
                  <h2>2. Datos personales recopilados</h2>
                  <p>El formulario solicita únicamente información necesaria para revisar y responder una consulta.</p>
                  <table className={styles.dataTable}><thead><tr><th>Dato</th><th>Carácter</th><th>Uso</th></tr></thead><tbody>
                    <tr><td>Nombre</td><td>Obligatorio</td><td>Identificar a la persona que inicia la conversación.</td></tr>
                    <tr><td>Correo electrónico</td><td>Obligatorio</td><td>Responder y dar seguimiento a la solicitud.</td></tr>
                    <tr><td>Empresa</td><td>Opcional</td><td>Comprender el contexto organizacional.</td></tr>
                    <tr><td>Servicio de interés</td><td>Obligatorio</td><td>Clasificar y preparar la respuesta.</td></tr>
                    <tr><td>Contexto del proyecto</td><td>Opcional</td><td>Evaluar la necesidad descrita por el titular.</td></tr>
                    <tr><td>Identificador técnico derivado de la dirección IP</td><td>Automático y temporal</td><td>Limitar intentos, prevenir abuso y proteger el formulario.</td></tr>
                  </tbody></table>
                  <p>No solicitamos intencionalmente datos sensibles, información financiera, contraseñas ni datos de niñas, niños o adolescentes. Recomendamos no incluirlos en el campo de contexto.</p>
                </section>

                <section className={styles.legalSection} id="finalidades">
                  <h2>3. Finalidades del tratamiento</h2>
                  <ul><li>Recibir, revisar y responder solicitudes enviadas por el sitio.</li><li>Contactar al titular en relación con la conversación que inició.</li><li>Evaluar necesidades de software, automatización, inteligencia artificial o consultoría.</li><li>Preparar reuniones, diagnósticos, recomendaciones o propuestas solicitadas.</li><li>Proteger el formulario, prevenir abuso y atender incidentes técnicos o de seguridad.</li><li>Cumplir obligaciones legales o requerimientos válidos de autoridades competentes.</li></ul>
                  <p>Los datos del formulario no se utilizarán para enviar publicidad masiva ni se venderán a terceros. Cualquier finalidad comercial adicional requerirá información y autorización separadas cuando corresponda.</p>
                </section>

                <section className={styles.legalSection} id="autorizacion">
                  <h2>4. Autorización</h2>
                  <p>Antes de enviar el formulario, el titular debe confirmar que leyó esta política y autoriza el tratamiento para las finalidades descritas. El envío registra la aceptación junto con la fecha de la solicitud.</p>
                  <p>La autorización puede revocarse y los datos pueden solicitarse o suprimirse cuando resulte procedente y no exista un deber legal o contractual que exija conservarlos.</p>
                </section>

                <section className={styles.legalSection} id="proveedores">
                  <h2>5. Encargados y proveedores tecnológicos</h2>
                  <p>Lumora puede utilizar proveedores de alojamiento, infraestructura y correo transaccional —actualmente Resend para entregar los mensajes del formulario— que procesan información siguiendo instrucciones necesarias para prestar sus servicios.</p>
                  <p>Algunos proveedores pueden operar infraestructura fuera de Colombia. Lumora procurará utilizar proveedores con compromisos adecuados de seguridad y protección de datos y limitará la información compartida a lo necesario.</p>
                </section>

                <section className={styles.legalSection} id="conservacion">
                  <h2>6. Conservación</h2>
                  <p>La información se conservará durante el tiempo razonablemente necesario para responder, dar seguimiento a la relación iniciada, atender obligaciones legales y resolver posibles reclamaciones. Cuando deje de ser necesaria, se eliminará o anonimizará de forma razonable, salvo que exista una obligación de conservación.</p>
                </section>

                <section className={styles.legalSection} id="derechos">
                  <h2>7. Derechos de los titulares</h2>
                  <p>De acuerdo con la Ley 1581 de 2012, el titular puede conocer, acceder, actualizar, rectificar y solicitar la supresión de sus datos; pedir prueba de la autorización; conocer el uso realizado; revocar la autorización cuando proceda y presentar quejas ante la Superintendencia de Industria y Comercio después de agotar el trámite correspondiente ante el responsable.</p>
                  <h3>Cómo presentar una solicitud</h3>
                  <p>Envía un correo a <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> con el asunto “Protección de datos”. Incluye tu nombre, el derecho que deseas ejercer, una descripción clara de la solicitud y la información necesaria para verificar tu identidad. Lumora responderá conforme a los términos y procedimientos legales aplicables.</p>
                  <p>Marco de referencia: <a href="https://www1.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981" target="_blank" rel="noreferrer">Ley 1581 de 2012</a> y <a href="https://sedeelectronica.sic.gov.co/politica-de-tratamiento-de-datos-personales" target="_blank" rel="noreferrer">orientación de la Superintendencia de Industria y Comercio</a>.</p>
                </section>

                <section className={styles.legalSection} id="seguridad">
                  <h2>8. Seguridad de la información</h2>
                  <p>Aplicamos medidas técnicas y organizativas razonables para reducir riesgos de acceso no autorizado, pérdida, alteración o divulgación. Ningún sistema conectado a internet puede garantizar seguridad absoluta; en caso de un incidente relevante se aplicarán los procedimientos exigidos por la normativa correspondiente.</p>
                </section>

                <section className={styles.legalSection} id="cookies">
                  <h2>9. Cookies y analítica</h2>
                  <p>Actualmente el sitio no utiliza cookies publicitarias ni herramientas de analítica de terceros. Si se incorporan tecnologías no esenciales que almacenen o accedan a información en el dispositivo, se actualizará esta política y se implementará el mecanismo de información o consentimiento que corresponda.</p>
                </section>

                <section className={styles.legalSection} id="cambios">
                  <h2>10. Cambios en esta política</h2>
                  <p>La política puede actualizarse cuando cambien las operaciones, los proveedores o las obligaciones aplicables. La fecha de actualización se publicará al comienzo de esta página y los cambios sustanciales se comunicarán por un medio adecuado cuando sea necesario.</p>
                </section>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
