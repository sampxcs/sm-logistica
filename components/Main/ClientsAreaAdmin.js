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
            <div className={styles.publicityBox}></div>
          </Link>
          <Link href='#'>
            <div className={styles.publicityBox}></div>
          </Link>
          <Link href='#'>
            <div className={styles.publicityBox}></div>
          </Link>
        </div>
      </div>
    </section>
  )
}
