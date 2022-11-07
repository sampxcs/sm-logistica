import styles from '../../styles/Main.module.css'
import Image from 'next/image'
import Link from 'next/link'

import Container from '../Container'

export default function ClientsAreaAdmin() {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.boxes}>
          <Link href='/clients-area/account'>
            <div className={styles.box}>ESTADO DE CUENTA</div>
          </Link>
          <Link href='/clients-area/rates'>
            <div className={styles.box}>TARIFAS Y PAGOS</div>
          </Link>
        </div>
        <div className={styles.boxes}>
          <Link href='/clients-area/my-orders'>
            <div className={styles.box}>PEDIDOS EN DEPOSITO: 0</div>
          </Link>
          <Link href='/clients-area/my-orders'>
            <div className={styles.box}>PEDIDOS ENVIADOS: 0</div>
          </Link>
          <Link href='/clients-area/my-orders'>
            <div className={styles.box}>TOTAL PEDIDOS: 0</div>
          </Link>
        </div>
        <br />
        <div className={styles.boxes}>
          <Link href='#'>
            <div className={styles.publicityBox}>
              <Image src='/envios_garantizados_-_promociones.jpg' alt='as' layout='fill' />
            </div>
          </Link>
          <Link href='#'>
            <div className={styles.publicityBox}>
              <Image src='/te_portada2x.jpg' alt='as' layout='fill' />
            </div>
          </Link>
          <Link href='#'>
            <div className={styles.publicityBox}>
              <Image src='/seguimiento-promociones22x.jpg' alt='as' layout='fill' />
            </div>
          </Link>
        </div>
        <div className={styles.boxes}>
          <a href='https://www.correoargentino.com.ar/' target='_blank' rel='noreferrer' className={styles.expressBox}>
            <Image src='/logocorreoargentino.svg' alt='Correo Argentino' width='140' height='60' />
          </a>
          <a href='http://promailcorreo.com.ar/' target='_blank' rel='noreferrer' className={styles.expressBox}>
            <Image src='/ProMail.Web_.Logo_.png' alt='Promail' width='240' height='40' />
          </a>
          <a href='https://www.cruzdelsur.com/' target='_blank' rel='noreferrer' className={styles.expressBox}>
            <Image src='/logocruzdelsur.png' alt='Cruz del Sur' width='200' height='35' />
          </a>
        </div>
      </div>
    </section>
  )
}
