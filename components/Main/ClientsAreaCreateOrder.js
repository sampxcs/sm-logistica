import styles from '../../styles/AreaClientsMain.module.css'
import Form from '../Form'
import Link from 'next/link'

export default function ClientsAreaHomeMain() {
  return <section className={styles.main}>
    <div className={styles.container}>
    <h2 className={styles.title}>Nuevo Pedido</h2>
    <Form />
    </div>
  </section>
}




