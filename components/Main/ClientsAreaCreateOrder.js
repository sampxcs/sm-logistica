import styles from '../../styles/Main.module.css'
import Form from '../Form'

export default function ClientsAreaHomeMain() {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>NUEVO PEDIDO</h2>
        <Form />
      </div>
    </section>
  )
}
