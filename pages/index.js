import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SM Logística</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a <Link href="/">SM Logística!</Link>
        </h1>
        <p className={styles.description}>Diseñamos soluciones logísticas a la medida de su negocio</p>
        <div className={styles.grid}>
          <Link href="/">
            <a className={styles.card}>
              <h2>Documentación &rarr;</h2>
              <p>Encuentre información detallada sobre las funciones y la API de SM Logistica</p>
            </a>
          </Link>
          <Link href="/">
            <a className={styles.card}>
              <h2>Cotizaciones online &rarr;</h2>
              <p>Cotiza rapidamente tu envio y escoge el metodo que mas se adapte a tus necesidades.</p>
            </a>
          </Link>
          <Link href="/">
            <a className={styles.card}>
              <h2>Sigue tu envio &rarr;</h2>
              <p>Descubre donde esta tu envio, su estado y la fecha estimada de llegada a tu localidad.</p>
            </a>
          </Link>
          <Link href="/area-clientes">
            <a className={styles.card}>
              <h2>Area clientes &rarr;</h2>
              <p>Sección de acceso restringido de herramientas y consultas desarrolladas para nuestros Clientes.</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>&copy; 2022 SM Logística</footer>
    </div>
  )
}
