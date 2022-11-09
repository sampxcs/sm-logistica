import styles from '../../styles/Main.module.css'

import Table from '../Table'
import Footer from '../Footer'

export default function ClientsAreaMyOrdersMain() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h2 className={styles.title}>PEDIDOS</h2>
        <Table />
      </div>
      <Footer />
    </section>
  )
}
