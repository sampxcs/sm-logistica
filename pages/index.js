import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import styles from '../styles/index.module.css'

import Imput from '../components/Input'
import Button from '../components/Button'
import Image from 'next/image'
import FacebookIcon from '../components/Icons/FacebookIcon'
import InstagramIcon from '../components/Icons/InstagramIcon'
import YoutubeIcon from '../components/Icons/YoutubeIcon'
import WhatsappIcon from '../components/Icons/WhatsappIcon'

export default function Home() {
  return (
    <>
      <Head>
        <title>SM Logística</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.contentSmall}>
            <div className={styles.textBox}>
              <h2 className={styles.subTitle}>
                BIENVENIDO! <br /> <span>SM LOGISTICA</span>
              </h2>
              <p>
                Diseñamos soluciones logísticas <br /> a la medida de su negocio.
              </p>
              <div className={styles.buttons}>
                <Button href={'/clients-area/admin'} className='buttonPrimary' light>
                  SERVICIOS
                </Button>
                <Button href={'/clients-area/admin'} className='buttonPrimary'>
                  AREA CLIENTES
                </Button>
              </div>
            </div>
          </div>
          <a className={styles.arrowDownButton} href='#main'>
            <i className={styles.arrowDown}></i>
          </a>
          <div className={styles.content}>
            <Image
              className={styles.img}
              src={'/20945983.jpg'}
              width='900px'
              height='600px'
              alt='Logistica'
              placeholder='blur'
              blurDataURL='/20945983.jpg'
            />
          </div>
        </div>
        <main className={styles.main} id='main'>
          <section>
            <div className={styles.content}>
              <Image
                className={styles.img}
                src={'/20945391.jpg'}
                width='600px'
                height='600px'
                alt='Logistica'
                placeholder='blur'
                blurDataURL='/20945391.jpg'
              />
            </div>
            <div className={styles.content}>
              <div className={styles.textBox}>
                <h2 className={styles.subTitle}>
                  ENVIOS A <span>TODO EL PAIS</span>
                </h2>
                <p>
                  Podés hacer tus envios a todos el pais con nuestro servicio <strong>SM LOGISTICA.</strong> Somos el operador logístico que
                  estabas esperando. Te invitamos a probar una experiencia única y smart de envíos.
                </p>
                <div className={styles.buttons}>
                  <Button href={'/clients-area/admin'} className='buttonPrimary'>
                    SABER MAS
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className={styles.content}>
              <div className={styles.textBox}>
                <h2 className={styles.subTitle}>
                  POTENCIA TU <span>COMERCIO</span>
                </h2>
                <p>
                  Expande tu negocio y has crecer tus ventas enviando pedidos <strong>facil y rapido.</strong> Con nuestro sistema de
                  importacion de pedidos podras realizar envios de forma masiva a <strong>todo el pais.</strong>
                </p>
                <div className={styles.buttons}>
                  <Button href={'/clients-area/admin'} className='buttonPrimary' light>
                    SABER MAS
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <Image
                className={styles.img}
                src={'/20943716.jpg'}
                width='600px'
                height='600px'
                alt='Logistica'
                placeholder='blur'
                blurDataURL='/20943716.jpg'
              />
            </div>
          </section>
          <section>
            <div className={styles.content}>
              <Image
                className={styles.img}
                src={'/20945238.jpg'}
                width='600px'
                height='600px'
                alt='Logistica'
                placeholder='blur'
                blurDataURL='/20945238.jpg'
              />
            </div>
            <div className={styles.content}>
              <div className={styles.textBox}>
                <h2 className={styles.subTitle}>
                  EL MEJOR <span>PRECIO</span>
                </h2>
                <p>
                  Cotiza online tus envios sin compromiso y elegi el metodo que mejor se adapte a tu presupuesto. Recibi{' '}
                  <strong>atencion personalizada.</strong>
                </p>
                <div className={styles.buttons}>
                  <Button href={'/clients-area/admin'} className='buttonPrimary'>
                    SABER MAS
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className={styles.content}>
              <div className={styles.expressList}>
                <h2 className={styles.subTitle}>
                  <span>EXPRESOS ADHERIDOS</span>
                </h2>
                <div className={styles.boxes}>
                  <div className={styles.box}>
                    <a href='https://www.correoargentino.com.ar/' target='_blank' rel='noreferrer' className={styles.expressBox}>
                      <Image src='/logocorreoargentino.png' alt='Correo Argentino' width='140' height='40' />
                    </a>
                  </div>
                  <div className={styles.box}>
                    <a href='https://www.cruzdelsur.com/' target='_blank' rel='noreferrer' className={styles.expressBox}>
                      <Image src='/logocruzdelsur.png' alt='Cruz del Sur' width='200' height='35' />
                    </a>
                  </div>
                  <div className={styles.box}>
                    <a href='http://promailcorreo.com.ar/' target='_blank' rel='noreferrer' className={styles.expressBox}>
                      <h2 className={styles.promailLogo}>
                        <span>PRO</span>mail
                      </h2>
                    </a>
                  </div>
                  <div className={styles.box}>
                    <a href='https://www.cruzdelsur.com/' target='_blank' rel='noreferrer' className={styles.expressBox}>
                      <Image src='/logooca.svg' alt='OCA' width='200' height='35' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <ul className={styles.socialContainer}>
          <li>
            <a href='#'>
              <FacebookIcon width='20' />
            </a>
          </li>
          <li>
            <a href='#'>
              <InstagramIcon width='20' />
            </a>
          </li>
          <li>
            <a href='#'>
              <YoutubeIcon width='20' />
            </a>
          </li>
          <li>
            <a href='#'>
              <WhatsappIcon width='20' />
            </a>
          </li>
          <div className={styles.hr}></div>
        </ul>
        <div className={styles.decorationCircle}></div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.content}>
            <h2>HERRAMIENTAS RAPIDAS</h2>
            <ul>
              <li>
                <Link href='#'>Seguimiento de envío</Link>
              </li>
              <li>
                <Link href='#'>Lista de expresos</Link>
              </li>
              <li>
                <Link href='#'>Tarifas y Pagos</Link>
              </li>
              <li>
                <Link href='#'>Documentacion</Link>
              </li>
              <li>
                <Link href='#'>Area Clientes</Link>
              </li>
              <li>
                <Link href='#'>Códigos Postales Argentinos</Link>
              </li>
            </ul>
          </div>
          <div className={styles.content}>
            <h2>ACERCA DE</h2>
            <ul>
              <li>
                <Link href='#'>SM LOGISTICA</Link>
              </li>
              <li>
                <Link href='#'>Términos y condiciones</Link>
              </li>
              <li>
                <Link href='#'>Política de privacidad</Link>
              </li>
            </ul>
            <h2>SERVICIOS</h2>
            <ul>
              <li>
                <Link href='#'>Promociones</Link>
              </li>
              <li>
                <Link href='#'>Tendencias</Link>
              </li>
              <li>
                <Link href='#'>Envíos</Link>
              </li>
            </ul>
          </div>
          <div className={styles.content}>
            <h2>AYUDA</h2>
            <ul>
              <li>
                <Link href='#'>¿Cómo enviar?</Link>
              </li>
              <li>
                <Link href='#'>Condiciones de embalaje</Link>
              </li>
              <li>
                <Link href='#'>Dónde veo mi número de guía</Link>
              </li>
              <li>
                <Link href='#'>Preguntas generales</Link>
              </li>
              <li>
                <Link href='#'>E-comerces</Link>
              </li>
              <li>
                <Link href='#'>Pagos</Link>
              </li>
              <li>
                <Link href='#'>Mi cuenta</Link>
              </li>
            </ul>
          </div>
          <div className={styles.content}>
            <h2>SUSCRIBITE A NUESTRO NEWSLETTER</h2>
            <h3>No te pierdas de toda la información nueva y promociones en SM LOGISTICA</h3>
            <form>
              <Imput label='Introduce tu correo electronico' />
              <Button>SUSCRIBIRSE</Button>
            </form>
          </div>
        </div>
        <div className={styles.copyright}>&copy; 2022 SM LOGISTICA &middot; Todos los derechos reservados</div>
        <div className={styles.decorationCircle}></div>
      </footer>
    </>
  )
}
