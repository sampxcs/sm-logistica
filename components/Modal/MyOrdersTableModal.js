import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

import Button from '../Button'

import TrashCanIcon from '../Icons/TrashCanIcon'
import EditIcon from '../Icons/EditIcon'
import EyeIcon from '../Icons/EyeIcon'
import PrintIcon from '../Icons/PrintIcon'

export default function MyOrdersTableModal({ closeModal, coords, select, deleteOrder }) {
  return ReactDOM.createPortal(
    <div className={styles.lightBG} onClick={closeModal}>
      <div
        className={`${styles.content} ${styles.tableModal}`}
        style={{
          left: coords.x + 180 > window.innerWidth ? `calc(${coords.x}px - ((${coords.x}px + 180px) - 100%)` : coords.x - 90,
          top: coords.y,
        }}
      >
        <div className={styles.main}>
          <Button href={`/clients-area/order/${select.orderId}`} className='navLeftButton' light>
            <EyeIcon width='16' height='16' />
            Ver
          </Button>
          <Button href='/clients-area/my-orders' className='navLeftButton' light>
            <EditIcon width='16' height='16' />
            Editar
          </Button>
          <Button className='navLeftButton' light>
            <PrintIcon width='16' height='16' />
            Imprimir
          </Button>
          <Button className='navLeftButton' onClick={() => deleteOrder(select)} red light>
            <TrashCanIcon width='16' height='16' />
            Eliminar
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  )
}
