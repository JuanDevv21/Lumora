import styles from './Navbar.module.css'
import Image from 'next/image'
import Logo from '../assets/Lumora.png'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <nav className={styles.nav}>
                <div>
                    <Image src={Logo} alt='Logo' height={40} width={120}></Image>
                </div>
                <div className={styles.tools}>
                    <Link href={'#section2'}><span>Servicios</span></Link>
                    <Link href={'#section3'}><span>Por Qué Lumora</span></Link>
                    <span>Proceso</span>
                    <span>Proyectos</span>
                    <Link href={'#section4'}><span>FAQ</span></Link>
                </div>
                <div className={styles.navbton}>
                    <Link href={'#section5'}><p>Comienza tu proyecto</p></Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar