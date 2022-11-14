import styles from './Main.module.css'
import Footer from '../Footer'
import Form from '../Form'

export default function ClientsAreaProfile({ user }) {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h2 className={styles.title}>EDITAR PERFIL</h2>
        <Form user={user} />
      </div>
      <Footer />
    </section>
  )
}
