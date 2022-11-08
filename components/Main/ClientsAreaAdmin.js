import styles from '../../styles/Main.module.css'
import Image from 'next/image'
import Link from 'next/link'

import Container from '../Container'
import AreaChart from '../AreaChart'
import PieChart from '../PieChart'

export default function ClientsAreaAdmin() {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>PEDIDOS</h2>
        <div className={styles.boxes}>
          <Link href="/clients-area/my-orders">
            <div className={styles.box}>
              <span className={styles.dashboardData}>
                PENDIENTES <span className={styles.dashboardDataNumberPendings}>15</span>
              </span>
            </div>
          </Link>
          <Link href="/clients-area/my-orders">
            <div className={styles.box}>
              <span className={styles.dashboardData}>
                EN CENTRO DE DISTRIBUCION<span className={styles.dashboardDataNumberOnDeposit}>9</span>
              </span>
            </div>
          </Link>
          <Link href="/clients-area/my-orders">
            <div className={styles.box}>
              <span className={styles.dashboardData}>
                ENVIADOS <span className={styles.dashboardDataNumberSends}>1693</span>
              </span>
            </div>
          </Link>
          <Link href="/clients-area/my-orders">
            <div className={styles.box}>
              <span className={styles.dashboardData}>
                TOTAL <span className={styles.dashboardDataNumberTotal}>1760</span>
              </span>
            </div>
          </Link>
        </div>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <AreaChart />
          </div>
          <div className={styles.box} style={{ width: '70%', padding: '0' }}>
            <PieChart />
          </div>
        </div>
        <div className={styles.boxes}>
          <Link href="/clients-area/account">
            <div className={styles.box}>ESTADO DE CUENTA</div>
          </Link>
          <Link href="/clients-area/rates">
            <div className={styles.box}>TARIFAS Y PAGOS</div>
          </Link>
        </div>
        <div className={styles.boxes}>
          <Link href="#">
            <div className={styles.publicityBox}></div>
          </Link>
          <Link href="#">
            <div className={styles.publicityBox}></div>
          </Link>
          <Link href="#">
            <div className={styles.publicityBox}></div>
          </Link>
        </div>
      </div>
    </section>
  )
}
