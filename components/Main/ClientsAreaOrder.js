import styles from './Main.module.css'

import { useState } from 'react'
import { useRouter } from 'next/router'

import Footer from '../Footer'
import Modal from '../Modal'
import Button from '../Button'
import DotMenuIcon from '../Icons/DotMenuIcon'

import { ORDER_STATUS } from '../../utils/dictionary'

export default function ClientsAreaOrder({ user, id }) {
  const [coords, setCoords] = useState({ x: -1, y: -1 })
  const [showModal, setShowModal] = useState()
  const router = useRouter()

  const order = user.orders.find((order) => {
    return order.orderId === id
  })

  const handleShowModal = (e) => {
    const rect = e.target.getBoundingClientRect()
    setCoords({ x: rect.left, y: rect.top + 30 })
    showModal ? setShowModal(false) : setShowModal(true)
  }

  if (!order) router.replace('/404')

  const {
    date,
    name,
    document,
    cuit,
    email,
    tel,
    cp,
    province,
    location,
    street,
    streetHeight,
    flat,
    department,
    specification,
    transport,
    type,
    cant,
    amount,
    status,
  } = order

  const address = `${street} ${streetHeight} ${flat ? `PISO ${flat}` : ''} ${department ? `DEPTO ${department}` : ''}`.trim()

  const statusColor = (status) => {
    if (status === ORDER_STATUS.PENDING) return 'var(--color-red-error-100)'
    if (status === ORDER_STATUS.ON_DEPOSIT) return 'var(--color-yellow-warning-100)'
    if (status === ORDER_STATUS.SEND) return 'var(--color-green-ok-100)'
  }

  console.log(order)
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h2 className={styles.title}>Pedido n° {id}</h2>
        <h3 className={styles.subTitle}>
          ESTADO: <span style={{ color: statusColor(status) }}>{status}</span>{' '}
          {status === ORDER_STATUS.SEND && (
            <>
              <br />
              Número de guía:{' '}
              <span className={styles.orderTraking}>
                191964064EGGGC1601 <a href='www.google.com'>Seguir Envío &gt;</a>
              </span>
            </>
          )}
        </h3>
        <div className={styles.box}>
          <div className={styles.orderButton}>
            <Button className={'circleButton'} light onClick={handleShowModal}>
              <DotMenuIcon width='18' />
            </Button>
          </div>
          <div className={styles.orderInfo}>
            <div className={styles.orderItem}>
              <span>Nombre y Apellido</span>
              <p>{name}</p>
            </div>
            <div className={styles.orderItem}>
              <span>Documento</span>
              <p>{document}</p>
            </div>
            {cuit && (
              <div className={styles.orderItem}>
                <span>Cuit</span>
                <p>{cuit}</p>
              </div>
            )}
            <div className={styles.orderItem}>
              <span>Email</span>
              <p>{email}</p>
            </div>
            <div className={styles.orderItem}>
              <span>Teléfono</span>
              <p>{tel}</p>
            </div>
            <div className={styles.orderItem}>
              <span>Código postal</span>
              <p>{cp}</p>
            </div>
            <div className={styles.orderItem}>
              <span>Provincia</span>
              <p>{province}</p>
            </div>
            <div className={styles.orderItem}>
              <span>Localidad</span>
              <p>{location}</p>
            </div>
            <div className={styles.orderItem}>
              <span>Dirección</span>
              <p>{address}</p>
            </div>
            {specification && (
              <div className={styles.orderItem}>
                <span>Especificación de la dirección</span>
                <p>{specification}</p>
              </div>
            )}
            <div className={styles.orderItem}>
              <span>Transporte</span>
              <p>{transport}</p>
            </div>
            <div className={styles.orderItem}>
              <span>Tipo de envio</span>
              <p>{type}</p>
            </div>
            <div className={styles.orderItem}>
              <span>Bultos</span>
              <p>{cant}</p>
            </div>
            <div className={styles.orderItem}>
              <span>Valor declarado</span>
              <p>{`$${amount}`}</p>
            </div>
            <div className={styles.orderItem}>
              <span>Fecha de creación</span>
              <p>{date}</p>
            </div>
            {status === ORDER_STATUS.SEND && (
              <div className={styles.orderItem}>
                <span>Fecha de envío</span>
                <p>{date}</p>
              </div>
            )}
          </div>
        </div>
        {showModal && <Modal className={'orderInfoModal'} closeModal={handleShowModal} coords={coords} />}
      </div>
      <Footer />
    </section>
  )
}
