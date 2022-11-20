import styles from './Modal.module.css'
import ReactDOM, { render } from 'react-dom'

import Button from '../Button'
import OrderLabel from '../OrderLabel'

import EditIcon from '../Icons/EditIcon'
import PrintIcon from '../Icons/PrintIcon'
import TrashCanIcon from '../Icons/TrashCanIcon'

import { CREATE_ORDER_STATUS } from '../../utils/dictionary'
import Input from '../Input'

export default function CreateOrderModal({ closeModal, createOrder, orderStatusCode, data }) {
  const handleCreateOrder = async () => {
    try {
      await createOrder(data)
      const orderLabel = document.getElementById('order-label')
      const orderLabelWindow = window.open('', `PEDIDO ${data.orderId}`, 'width=600')
      orderLabelWindow.document.write(orderLabel.innerHTML)
      orderLabelWindow.print()
      orderLabelWindow.close()
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }
  return ReactDOM.createPortal(
    <>
      <div className={styles.darkBG} onClick={closeModal} />
      <div className={`${styles.content} ${styles.fullScreenModal}`}>
        <div className={styles.main}>
          <h4>Verifique los datos en la etiqueta de envio antes de continuar.</h4>
          <small>
            Puede adelantar el pago a través de Mercado Pago o su Cuenta Corriente. Sino, imprima la etiqueta de envio y lleve el pedido a
            SM Logistica.
          </small>
          <OrderLabel order={data} />
          <div className={styles.orderPayment}>
            <Input type='radio' /> <label>MERCADO PAGO</label>
            <Input type='radio' /> <label>DINERO EN CUENTA</label>
          </div>
          <div className={styles.buttons}>
            <div>
              <Button className='buttonPrimary' onClick={closeModal} light>
                <EditIcon width='16' height='16' />
                Editar
              </Button>
              <Button className='buttonPrimary' red light>
                <TrashCanIcon width='16' height='16' />
                Eliminar
              </Button>
            </div>
            <div>
              <Button
                className='buttonPrimary'
                onClick={handleCreateOrder}
                loading={orderStatusCode === CREATE_ORDER_STATUS.LOADING}
                light
                width={'130px'}
              >
                <PrintIcon width='16' height='16' />
                Imprimir *
              </Button>
              <Button className='buttonPrimary' disabled light>
                Pagar
              </Button>
            </div>
          </div>
          <small>* Tenga en cuenta que una vez impresa la etiqueta, ya no podrá hacer cambios en el pedido.</small>
        </div>
      </div>
    </>,
    document.getElementById('modal-root')
  )
}
