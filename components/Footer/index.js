import styles from '../../styles/Footer.module.css'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* <div className={styles.footerContent}>
        <div className={styles.content}>
          <h2>HERRAMIENTAS RAPIDAS</h2>
          <ul>
            <li>
              <Link href="#">Seguimiento de envío</Link>
            </li>
            <li>
              <Link href="#">Lista de expresos</Link>
            </li>
            <li>
              <Link href="#">Tarifas y Pagos</Link>
            </li>
            <li>
              <Link href="#">Documentacion</Link>
            </li>
            <li>
              <Link href="#">Area Clientes</Link>
            </li>
            <li>
              <Link href="#">Códigos Postales Argentinos</Link>
            </li>
          </ul>
        </div>
        <div className={styles.content}>
          <h2>ACERCA DE</h2>
          <ul>
            <li>
              <Link href="#">SM LOGISTICA</Link>
            </li>
            <li>
              <Link href="#">Términos y condiciones</Link>
            </li>
            <li>
              <Link href="#">Política de privacidad</Link>
            </li>
          </ul>
          <h2>SERVICIOS</h2>
          <ul>
            <li>
              <Link href="#">Promociones</Link>
            </li>
            <li>
              <Link href="#">Tendencias</Link>
            </li>
            <li>
              <Link href="#">Envíos</Link>
            </li>
          </ul>
        </div>
        <div className={styles.content}>
          <h2>AYUDA</h2>
          <ul>
            <li>
              <Link href="#">¿Cómo enviar?</Link>
            </li>
            <li>
              <Link href="#">Condiciones de embalaje</Link>
            </li>
            <li>
              <Link href="#">Dónde veo mi número de guía</Link>
            </li>
            <li>
              <Link href="#">Preguntas generales</Link>
            </li>
            <li>
              <Link href="#">E-comerces</Link>
            </li>
            <li>
              <Link href="#">Pagos</Link>
            </li>
            <li>
              <Link href="#">Mi cuenta</Link>
            </li>
          </ul>
        </div>
      </div> */}
      <div className={styles.systemStatus}>
        Estado del Sistema: <span>Todo está bien</span>
      </div>
      <div className={styles.content}>
        <span>&copy; 2022 SM LOGISTICA &middot; Todos los derechos reservados.</span>
        <Link href="#">Términos y condiciones</Link>
        <Link href="#">Política de privacidad</Link>
        <Link href="#">Seguimiento de envío</Link>
      </div>
    </footer>
  )
}
