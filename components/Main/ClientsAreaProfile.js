import styles from './Main.module.css'
import Footer from '../Footer'
import Form from '../Form'

export default function ClientsAreaProfile({ user, updateProfile, userStatusCode }) {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h2 className={styles.title}>EDITAR PERFIL</h2>
        <Form user={user} updateProfile={updateProfile} userStatusCode={userStatusCode} />
      </div>
      <Footer />
    </section>
  )
}
