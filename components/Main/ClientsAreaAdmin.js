import styles from './Main.module.css'
import Image from 'next/image'
import Link from 'next/link'

import AreaChart from '../AreaChart'
import PieChart from '../PieChart'
import Footer from '../Footer'

export default function ClientsAreaAdmin() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h2 className={styles.title}>PEDIDOS</h2>
        <div className={styles.boxes}>
          <Link href='/clients-area/my-orders'>
            <div className={styles.dashboardDataBox}>
              <span className={styles.dashboardData}>
                <p>
                  PENDIENTES <span className={styles.dashboardDataNumberPendings}>15</span>
                </p>
                <p>
                  EN CENTRO DE DISTRIBUCION <span className={styles.dashboardDataNumberOnDeposit}>9</span>
                </p>
                <p>
                  TOTAL <span className={styles.dashboardDataNumberTotal}>1760</span>
                </p>
                <p>
                  ENVIADOS <span className={styles.dashboardDataNumberSends}>1693</span>
                </p>
                <p>
                  TOTAL <span className={styles.dashboardDataNumberTotal}>1760</span>
                </p>
              </span>
              <span className={styles.dashboardData}>MIS PEDIDOS</span>
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
          <Link href='/clients-area/account'>
            <div className={styles.box}>ESTADO DE CUENTA</div>
          </Link>
          <Link href='/clients-area/rates'>
            <div className={styles.box}>TARIFAS Y PAGOS</div>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  )
}
