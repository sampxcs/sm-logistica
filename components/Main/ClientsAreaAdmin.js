import styles from '../../styles/AreaClientsMain.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function ClientsAreaAdmin() {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <Link href="#">
          <div className={styles.headbandBox}>
            <Image src="/cintillo_findes_rebajados.jpg" alt="as" layout="fill" />
          </div>
        </Link>
        <div className={styles.boxes}>
          <Link href="/clients-area/account">
            <div className={styles.box}>ESTADO DE CUENTA</div>
          </Link>
          <Link href="/clients-area/rates">
            <div className={styles.box}>MEMBRESIA Y PAGOS</div>
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
              <Image src="/logocorreoargentino.svg" alt="Correo Argentino" layout="fill" />
            </div>
          </Link>
          <Link href="#">
            <div className={styles.expressBox}>
              <Image src="/logooca.svg" alt="OCA" layout="fill" />
            </div>
          </Link>
          <Link href="#">
            <div className={styles.expressBox}>
              <Image src="/logoviacargo.svg" alt="Via Cargo" layout="fill" />
            </div>
          </Link>
          <Link href="#">
            <div className={styles.expressBox}>
              <Image src="/descarga.png" alt="Moto Express" layout="fill" />
            </div>
          </Link>
          <Link href="#">
            <div className={styles.expressBox}>
              <Image src="/logotarifaplana.webp" alt="Expreso Tarifa Plana" layout="fill" />
            </div>
          </Link>
          <Link href="#">
            <div className={styles.expressBox}>
              <Image src="/logoexpresos.svg" alt="Otros Expresos" layout="fill" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
