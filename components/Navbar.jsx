import styles from './Navbar.module.css'
import Image from 'next/image'
import Logo from '../assets/Lumora.png'

const Navbar = () => {
    return (
        <>
            <nav className={styles.nav}>
                <div>
                    <Image src={Logo} alt='Logo' height={40} width={120}></Image>
                </div>
                <div className={styles.tools}>
                    <span>Servicios</span>
                    <span>Por Qué Lumora</span>
                    <span>Proceso</span>
                    <span>Proyectos</span>
                    <span>FAQ</span>
                </div>
                <div className={styles.navbton}>
                    <p>Comienza tu proyecto</p>
                </div>
            </nav>
        </>
    )
}

export default Navbar