import styles from '../../styles/Main.module.css'
import Form from '../Form'

export default function ClientsAreaProfile() {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>Editar Perfil</h2>
        <Form />
      </div>
    </section>
  )
}
