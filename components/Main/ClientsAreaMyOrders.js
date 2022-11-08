import styles from '../../styles/Main.module.css'

import Table from '../Table'

export default function ClientsAreaMyOrdersMain() {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>PEDIDOS</h2>
        <Table />
      </div>
    </section>
  )
}
