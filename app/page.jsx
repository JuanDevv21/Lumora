import Navbar from "@/components/Navbar"
import styles from './page.module.css'
import Image from "next/image"
import Bot from '../assets/bot.svg'
import Briefcase from '../assets/briefcase.svg'
import Building from '../assets/building.svg'
import Code from '../assets/code.svg'
import Compass from '../assets/compass.svg'
import Message from '../assets/message.svg'
import Search from '../assets/search.svg'
import Workflow from '../assets/workflow.svg'

import Gauge from '../assets/gauge.svg'
import Handshake from '../assets/handshake.svg'
import Shield from '../assets/shield.svg'
import Users from '../assets/users.svg'

import Mail from '../assets/mail.svg'
import Map from '../assets/map.svg'

import FAQ from "@/components/FAQ"
import Formulario from "@/components/Formulario"


const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className={styles.hero}>
        <h1>Software, IA y automatización creados <span className={styles.textodegradado}>con propósito.</span></h1>
        <span className={styles.herotext}>Lumora es un equipo de ingenieros informáticos que ayuda a empresas ambiciosas a lanzar agentes de IA, plataformas a medida y automatización de procesos, combinando la atención personalizada de un estudio boutique con la fiabilidad de un equipo de ingeniería sénior.</span>
        <div className={styles.actionbuttons}>
          <p style={{border: '1px solid #6D5EF5', color: 'white', backgroundColor: '#6D5EF5'}}>Agenda una reunion</p>
          <p style={{border: '1px solid #7A8191'}}>Explora nuestros servicios</p>
        </div>
      </section>

      <section className={styles.section1} id="section1">
        <div>
          <p>10+</p>
          <span>Proyectos entregados</span>
        </div>
        <div>
          <p>+2</p>
          <span>Años de experiencia</span>
        </div>
        <div>
          <p>5</p>
          <span>Industrias trabajadas</span>
        </div>
        <div>
          <p>100%</p>
          <span>Entregas realizadas</span>
        </div>
      </section>

      <section className={styles.section2} id="section2">
        <div className={styles.services}>
          <h2>Todo lo que necesitas para construir, <p>automatizar y crecer</p></h2>
          <span>Desde un único agente de IA hasta una plataforma de producto integral, trabajamos como un socio integrado, no como un simple proveedor. Cada proyecto se define, se presupuesta y se ejecuta con total transparencia.</span>
        </div>
        <div>
          <div className={styles.serviceoptions}>
            <div className={styles.servicecontent} style={{borderTopLeftRadius: '20px'}}>
              <div className={styles.contenedor}>
                <Image src={Bot} alt="Robot" width={30} height={30} className={styles.icono}></Image>
              </div>
              <p>Agentes IA</p>
              <span>Agentes autónomos que planifican, actúan y se integran con tus herramientas, desde la investigación hasta las operaciones.</span>
            </div>
            <div className={styles.servicecontent}>
              <div className={styles.contenedor}>
                <Image src={Message} alt="Message" width={30} height={30} className={styles.icono}></Image>
              </div>
              <p>Chatbots</p>
              <span>Asistentes conversacionales adaptados a tu marca, base de conocimientos y canales.</span>
            </div>
            <div className={styles.servicecontent}>
              <div className={styles.contenedor}>
                <Image src={Code} alt="Code" width={30} height={30} className={styles.icono}></Image>
              </div>
              <p>Desarrollo web personalizado</p>
              <span>Sitios y aplicaciones web de alto rendimiento desarrollados con tecnologías modernas y escalables.</span>
            </div>
            <div className={styles.servicecontent} style={{borderTopRightRadius: '20px'}}>
              <div className={styles.contenedor}>
                <Image src={Bot} alt="Robot" width={30} height={30} className={styles.icono}></Image>
              </div>
              <p>Software empresarial</p>
              <span>Plataformas internas, paneles de control y sistemas de back-office que se ajustan a los flujos de trabajo reales.</span>
            </div>
          </div>
          <div className={styles.serviceoptions}> 
            <div className={styles.servicecontent} style={{borderBottomLeftRadius: '20px'}}>
              <div className={styles.contenedor}>
                <Image src={Workflow} alt="Workflow" width={30} height={30} className={styles.icono}></Image>
              </div>
              <p>Automatizacion de procesos</p>
              <span>Elimine el trabajo repetitivo con automatizaciones personalizadas en su pila existente.</span>
            </div>
            <div className={styles.servicecontent}>
              <div className={styles.contenedor}>
                <Image src={Briefcase} alt="Briefcase" width={30} height={30} className={styles.icono}></Image>
              </div>
              <p>Proyectos freelance</p>
              <span>Colaboraciones específicas para fundadores y equipos que necesitan ingeniería de alto nivel... y rápido.</span>
            </div>
            <div className={styles.servicecontent}>
              <div className={styles.contenedor}>
                <Image src={Search} alt="Search" width={30} height={30} className={styles.icono}></Image>
              </div>
              <p>Optimizacion SEO</p>
              <span>SEO técnico y de contenido de efecto acumulativo: diseñado para atraer tráfico cualificado.</span>
            </div>
            <div className={styles.servicecontent} style={{borderBottomRightRadius: '20px'}}>
              <div className={styles.contenedor}>
                <Image src={Compass} alt="Compass" width={30} height={30} className={styles.icono}></Image>
              </div>
              <p>Consultas digitales</p>
              <span>Estrategia, arquitectura y hojas de ruta para ayudarle a tomar decisiones técnicas con confianza.</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section3} id="section3">
        <div className={styles.section3left}>
          <div className={styles.stickcomponent}>
            <span>¿POR QUÉ LUMORA?</span>
            <h3>El cuidado de un Estudio, <p style={{color: '#7A8191', fontSize: '40px', lineHeight: '10px'}}>El rigor de una Ingenieria</p></h3>
            <p>No vendemos horas, vendemos resultados. Nuestro equipo, reducido y de alto nivel, nos permite mantener criterios firmes sobre la calidad, la comunicación y el oficio.</p>
          </div>
        </div>
        <div className={styles.section3right}>
          <div className={styles.section3comp}>
            <Image src={Users} alt="Usuarios"></Image>
            <div>
              <p>Un equipo experimentado</p>
              <span>Nuestro equipo esta conformado por profesionales con experiencia real en entornos de produccion, sin subcontratos ni traspasos de tareas.</span>
            </div>
          </div>
          <div className={styles.section3comp}>
            <Image src={Handshake} alt="Handshake"></Image>
            <div>
              <p>Atencion de primer nivel</p>
              <span>Menos clientes, mayor enfoque. Hablas directamente con las personas que desarrollan tu producto.</span>
            </div>
          </div>
          <div className={styles.section3comp}>
            <Image src={Gauge} alt="Dashboard"></Image>
            <div>
              <p>Entregas de confianza</p>
              <span>Hitos claros, demostraciones semanales y plazos predecibles. Sin sorpresas al finalizar los plazos.</span>
            </div>
          </div>
          <div className={styles.section3comp}>
            <Image src={Shield} alt="Escudo"></Image>
            <div>
              <p>Hecho para durar</p>
              <span>Escribimos código que puedes mantener, traspasar y escalar, con documentación y una arquitectura limpia.</span>          
            </div>
          </div>
        </div>
      </section>

    {/* FALTA SECCION EN LA QUE SE DESCRIBE EL PROCESO Y LINKEARLOS DESDE EL NAVBAR*/ }

      <section className={styles.section4} id="section4">
        <div className={styles.section4left}>
          <span>FAQ</span>
          <h3>Respuestas directas</h3>
          <p>¿Tienes alguna pregunta que no aparece aquí? Envíala a través del formulario de contacto; respondemos en un plazo de un día hábil.</p>
        </div>
        <div className={styles.section4right}>
          <FAQ></FAQ>
        </div>
      </section>

      <section className={styles.section5} id="section5">
        <div className={styles.section5left}>
          <span style={{color: '#6D5EF5', fontWeight: '900', marginBottom: '20px'}}>CONTACTO</span>
          <h3 style={{fontSize: '40px', width: '500px', marginBottom: '20px', lineHeight: '40px'}}>Construyamos algo que valga la pena lanzar.</h3>
          <p style={{color: '#7A8191', width: '600px', marginBottom: '40px'}}>Cuéntanos sobre tu proyecto o idea. Te responderemos en un plazo de un día hábil indicándote los siguientes pasos, ya sea una llamada, una definición del alcance o una recomendación útil.</p>
          <div className={styles.section5bloq}>
            <div>
              <Image src={Mail} alt="Email"></Image>
            </div>
            <span>lumoraclientsupport@gmail.com</span>
          </div>
          <div className={styles.section5bloq}>
            <div>
              <Image src={Map} alt="Mapa"></Image>
            </div>
            <span>Cali, Colombia - Presencia global</span>
          </div>
        </div>
        <div>
          <Formulario></Formulario>
        </div>
      </section>
    </>
  )
}

export default Home