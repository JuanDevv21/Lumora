'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'

const links = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/#metodo', label: 'Método' },
  { href: '/#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Navegación principal">
        <Link className={styles.brand} href="/" aria-label="Lumora, ir al inicio" onClick={() => setOpen(false)}>
          <Image src="/brand/logos/lumora-logo-horizontal.svg" alt="Lumora" width={190} height={49} priority />
        </Link>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`${styles.menu} ${open ? styles.menuOpen : ''}`} id="main-menu">
          <div className={styles.links}>
            {links.map((link) => (
              <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
            ))}
          </div>
          <Link className={styles.cta} href="/contacto" onClick={() => setOpen(false)}>
            Hablemos <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </nav>
    </header>
  )
}
