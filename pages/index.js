import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import styles from './index.module.css'

import Imput from '../components/Input'
import Button from '../components/Button'
import Image from 'next/image'
import FacebookIcon from '../components/Icons/FacebookIcon'
import InstagramIcon from '../components/Icons/InstagramIcon'
import YoutubeIcon from '../components/Icons/YoutubeIcon'
import WhatsappIcon from '../components/Icons/WhatsappIcon'

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>SM Logística</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.textBox}>
              <h2 className={styles.subTitle}>
                <span>
                  EN <strong>SM LOGISTICA</strong>
                </span>
                Diseñamos soliciones logisticas a la medida de <strong>tus necesidades.</strong> <br />
                Expandemos tu negocio y hacemos crecer tus ventas <strong>facil y rapido.</strong> <br />
                Realizamos envios de forma masiva a <strong>todo el pais.</strong>
              </h2>
              <div className={styles.buttons}>
                <Button href={'/clients-area/admin'} className="buttonPrimary" light color={'var(--color-white-100)'}>
                  SERVICIOS
                </Button>
                <Button href={'/clients-area/admin'} className="buttonPrimary" background={'var(--color-primary-80)'}>
                  AREA CLIENTES
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.imgContent}></div>
        </div>
      </div>
      <main className={styles.main} id="main">
        <section className={styles.container}>
          <div className={styles.boxes}>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
          </div>
        </section>
        <section className={styles.container}>
          <div className={styles.content}>
            <div className={styles.textBox}>
              <h3 className={styles.subTitle}>
                <strong>Diseñamos soliciones logisticas a la medida de tus necesidades tu negocio y hacemos crecer tus ventas</strong>
              </h3>
            </div>
            <div className={styles.imgContent}>
              <Image src={'/Bank-Cards-Website-Template-1-scaled.jpg'} alt={'img'} width={'680'} height={'450'} />
            </div>
          </div>
        </section>
      </main>
      <ul className={styles.socialContainer}>
        <li>
          <Button className={'circleButton'} href="#">
            <FacebookIcon width="16" />
          </Button>
        </li>
        <li>
          <Button className={'circleButton'} href="#">
            <InstagramIcon width="16" />
          </Button>
        </li>
        <li>
          <Button className={'circleButton'} href="#">
            <YoutubeIcon width="16" />
          </Button>
        </li>
        <li>
          <Button className={'circleButton'} href="#">
            <WhatsappIcon width="16" />
          </Button>
        </li>
        <div className={styles.hr}></div>
      </ul>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
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
          <div className={styles.content}>
            <h2>SUSCRIBITE A NUESTRO NEWSLETTER</h2>
            <h3>No te pierdas de toda la información nueva y promociones en SM LOGISTICA</h3>
            <form>
              <Imput label="Introduce tu correo electronico" />
              <Button className={'formButton'}>SUSCRIBIRSE</Button>
            </form>
          </div>
        </div>
        <div className={styles.copyright}>&copy; 2022 SM LOGISTICA &middot; Todos los derechos reservados</div>
      </footer>
    </div>
  )
}
