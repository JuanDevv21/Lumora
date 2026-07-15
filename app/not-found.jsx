import Link from 'next/link'
import { ArrowLeft, MessageCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './institutional.module.css'

export const metadata = {
  title: 'Página no encontrada',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>Error 404</p>
            <h1>Esta página no existe o cambió de dirección.</h1>
            <p className={styles.lead}>
              Puedes volver al inicio para conocer Lumora o escribirnos si estabas buscando información específica.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="/">
                <ArrowLeft size={18} aria-hidden="true" /> Volver al inicio
              </Link>
              <Link className={styles.secondaryButton} href="/contacto">
                <MessageCircle size={18} aria-hidden="true" /> Contactar a Lumora
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
