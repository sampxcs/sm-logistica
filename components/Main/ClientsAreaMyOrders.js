import styles from './Main.module.css'

import Table from '../Table'
import Footer from '../Footer'

export default function ClientsAreaMyOrdersMain({ user, deleteOrder }) {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h2 className={styles.title}>PEDIDOS</h2>
        <Table className={'myOrdersTable'} user={user} deleteOrder={deleteOrder} />
      </div>
      <Footer />
    </section>
  )
}
