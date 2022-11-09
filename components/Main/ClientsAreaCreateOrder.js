import styles from '../../styles/Main.module.css'
import Footer from '../Footer'
import Form from '../Form'

export default function ClientsAreaHomeMain() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h2 className={styles.title}>NUEVO PEDIDO</h2>
        <Form />
      </div>
      <Footer />
    </section>
  )
}
