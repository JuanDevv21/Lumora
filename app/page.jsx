import Navbar from "@/components/Navbar"
import styles from './page.module.css'

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
    </>
  )
}

export default Home