import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

import Button from '../Button'

import EditIcon from '../Icons/EditIcon'
import PrintIcon from '../Icons/PrintIcon'

export default function OrderInfoModal({ closeModal, coords }) {
  return ReactDOM.createPortal(
    <>
      <div className={styles.lightBG} onClick={closeModal} />
      <div
        className={`${styles.content} ${styles.tableModal}`}
        style={{
          left: coords.x + 180 > window.innerWidth ? `calc(${coords.x}px - ((${coords.x}px + 180px) - 100%)` : coords.x - 90,
          top: coords.y,
        }}
      >
        <div className={styles.main}>
          <Button href="/clients-area/profile" className="navLeftButton" light>
            <EditIcon width="16" height="16" />
            Editar
          </Button>
          <Button className="navLeftButton" light>
            <PrintIcon width="16" height="16" />
            Imprimir
          </Button>
        </div>
      </div>
    </>,
    document.getElementById('modal-root')
  )
}
