import styles from '../../styles/Main.module.css'
import Footer from '../Footer'

import Table from '../Table'

export default function ClientsAreaImportOrdersMain() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h2 className={styles.title}>USUARIOS</h2>
        <Table />
      </div>
      <Footer />
    </section>
  )
}
