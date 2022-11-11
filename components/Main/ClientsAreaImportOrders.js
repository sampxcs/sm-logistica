import styles from './Main.module.css'
import Footer from '../Footer'
import Form from '../Form'

export default function AreaClientsHomeMain() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h2 className={styles.title}>IMPORTAR PEDIDOS</h2>
        <Form />
      </div>
      <Footer />
    </section>
  )
}
