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

      <section className={styles.section1}>
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

      <section className={styles.section2}>
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
                <Image src={Workflow} alt="Workflow" width={30} height={30}></Image>
              </div>
              <p>Automatizacion de procesos</p>
              <span>Elimine el trabajo repetitivo con automatizaciones personalizadas en su pila existente.</span>
            </div>
            <div className={styles.servicecontent}>
              <div className={styles.contenedor}>
                <Image src={Briefcase} alt="Briefcase" width={30} height={30}></Image>
              </div>
              <p>Proyectos freelance</p>
              <span>Colaboraciones específicas para fundadores y equipos que necesitan ingeniería de alto nivel... y rápido.</span>
            </div>
            <div className={styles.servicecontent}>
              <div className={styles.contenedor}>
                <Image src={Search} alt="Search" width={30} height={30}></Image>
              </div>
              <p>Optimizacion SEO</p>
              <span>SEO técnico y de contenido de efecto acumulativo: diseñado para atraer tráfico cualificado.</span>
            </div>
            <div className={styles.servicecontent} style={{borderBottomRightRadius: '20px'}}>
              <div className={styles.contenedor}>
                <Image src={Compass} alt="Compass" width={30} height={30}></Image>
              </div>
              <p>Consultas digitales</p>
              <span>Estrategia, arquitectura y hojas de ruta para ayudarle a tomar decisiones técnicas con confianza.</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section3}>

      </section>
    </>
  )
}

export default Home