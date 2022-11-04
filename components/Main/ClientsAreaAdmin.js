import styles from '../../styles/AreaClientsMain.module.css'
import Image from 'next/image'
import Link from 'next/link'

import Container from '../Container'

export default function ClientsAreaAdmin() {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.boxes}>
          <Link href="/clients-area/account">
            <div className={styles.box}>ESTADO DE CUENTA</div>
          </Link>
          <Link href="/clients-area/rates">
            <div className={styles.box}>TARIFAS Y PAGOS</div>
          </Link>
        </div>
        <div className={styles.boxes}>
          <Link href="/clients-area/my-orders">
            <div className={styles.box}>PEDIDOS EN DEPOSITO: 0</div>
          </Link>
          <Link href="/clients-area/my-orders">
            <div className={styles.box}>PEDIDOS ENVIADOS: 0</div>
          </Link>
          <Link href="/clients-area/my-orders">
            <div className={styles.box}>TOTAL PEDIDOS: 0</div>
          </Link>
        </div>
        <br />
        <div className={styles.boxes}>
          <Link href="#">
            <div className={styles.publicityBox}>
              <Image src="/envios_garantizados_-_promociones.jpg" alt="as" layout="fill" />
            </div>
          </Link>
          <Link href="#">
            <div className={styles.publicityBox}>
              <Image src="/te_portada2x.jpg" alt="as" layout="fill" />
            </div>
          </Link>
          <Link href="#">
            <div className={styles.publicityBox}>
              <Image src="/seguimiento-promociones22x.jpg" alt="as" layout="fill" />
            </div>
          </Link>
        </div>
        <div className={styles.boxes}>
          <Link href="#">
            <div className={styles.expressBox}>
              <Image src="/logocorreoargentino.svg" alt="Correo Argentino" width='140' height='60' />
            </div>
          </Link>
          <Link href="#">
            <div className={styles.expressBox}>
              <Image src="/ProMail.Web_.Logo_.png" alt="Promail" width='240' height='40' />
            </div>
          </Link>
          <Link href="#">
            <div className={styles.expressBox}>
              <Image src="/logocruzdelsur.jpg" alt="Cruz del Sur" width='210' height='40' />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
