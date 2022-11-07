import styles from '../../styles/Main.module.css'
import Form from '../Form'

export default function AreaClientsHomeMain() {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>Importar Pedidos</h2>
        <Form />
      </div>
    </section>
  )
}
