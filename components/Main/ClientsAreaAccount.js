import styles from '../../styles/Main.module.css'
import Footer from '../Footer'

import Table from '../Table'

export default function ClientsAreaAccount() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h2 className={styles.title}>ESTADO DE CUENTA</h2>
        <div className={styles.boxSpaceBetween}>
          <h3>HISTORIAL DE CUENTA CORRIENTE</h3> <h3 className={styles.saldoActual}>Saldo $25.000</h3>
        </div>
        <a href="#">Descargar resumen de cuenta.</a>
        <Table />
      </div>
      <Footer />
    </section>
  )
}
