import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

const links = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/politica-de-privacidad', label: 'Privacidad' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Link href="/" aria-label="Lumora, ir al inicio">
            <Image src="/brand/logos/lumora-logo-invertido.svg" alt="Lumora" width={180} height={46} />
          </Link>
          <nav className={styles.links} aria-label="Navegación del pie de página">
            {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
          </nav>
        </div>
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Lumora. Estudio de software y consultoría tecnológica.</p>
          <p>Cali, Colombia · Atendemos empresas en todo el país.</p>
        </div>
      </div>
    </footer>
  )
}
