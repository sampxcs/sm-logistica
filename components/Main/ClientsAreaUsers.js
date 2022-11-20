import styles from './Main.module.css'
import Link from 'next/link'

import Footer from '../Footer'
import Table from '../Table'

export default function ClientsAreaImportOrdersMain() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h2 className={styles.title}>USUARIOS</h2>
        <Link href={'/clients-area/admin'}>
          <div className={styles.link}>(+) Crear usuario</div>
        </Link>
        <Table className={'usersTable'} />
      </div>
      <Footer />
    </section>
  )
}
