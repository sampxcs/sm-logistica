import styles from './Main.module.css'
import Footer from '../Footer'
import Form from '../Form'

export default function ClientsAreaCreateOrder({ user, createOrder }) {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h2 className={styles.title}>NUEVO PEDIDO</h2>
        <Form user={user} createOrder={createOrder} />
      </div>
      <Footer />
    </section>
  )
}
