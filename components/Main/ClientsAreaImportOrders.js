import styles from './Main.module.css'
import { useState, useEffect } from 'react'

import Footer from '../Footer'
import Form from '../Form'
import Modal from '../Modal'

export default function AreaClientsHomeMain({ user }) {
  const [showModal, setShowModal] = useState()

  useEffect(() => {
    if (!user.document || !user.cuit || !user.email || !user.tel || !user.address || !user.cp) {
      setShowModal(true)
    }
  }, [setShowModal, user])
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h2 className={styles.title}>IMPORTAR PEDIDOS</h2>
        <Form />
      </div>
      <Footer />
      {showModal && <Modal modalType={'create-order-warning'} />}
    </section>
  )
}
