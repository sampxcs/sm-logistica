import { useState } from 'react'
import styles from './Header.module.css'
import Link from 'next/link'

import useUser from '../../hooks/useUser'

import Modal from '../Modal'
import Button from '../Button'
import Title from '../Title'

export default function ClientsAreaHeader() {
  const [coords, setCoords] = useState({ x: -1, y: -1 })
  const [showModal, setShowModal] = useState()
  const { user } = useUser()

  const handleShowModal = (e) => {
    const rect = e.target.getBoundingClientRect()
    setCoords({ x: rect.left, y: rect.top + 40 })
    showModal ? setShowModal(false) : setShowModal(true)
  }

  return (
    <header className={styles.header}>
      <Title />
      <ul>
        <Link href='/docs/admin'>AYUDA </Link>
        <Button className={'profileButton'} light onClick={handleShowModal}>
          {user.displayName}
          <i></i>
        </Button>
        {showModal && <Modal className={'profileModal'} closeModal={handleShowModal} coords={coords} />}
      </ul>
    </header>
  )
}
