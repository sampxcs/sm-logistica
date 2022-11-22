import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

import Button from '../Button'

export default function OrderInfoModal() {
  return ReactDOM.createPortal(
    <>
      <div className={styles.darkBG} />
      <div className={`${styles.content} ${styles.fullScreenModal}`}>
        <div className={styles.main}>
          <h2 className={styles.title}>COMPLETE SU PERFIL</h2>
          <p className={styles.contentText}>
            Antes de poder crear pedidos debe completar su perfil. Por favor, haga click en <strong>editar perfil</strong> y complete sus
            datos de envio.
          </p>
          <div className={styles.buttons}>
            <Button className="buttonPrimary" width="150px" href="/clients-area/admin" light>
              VOLVER
            </Button>
            <Button className="buttonPrimary" width="150px" href="/clients-area/profile">
              EDITAR PERFIL
            </Button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('modal-root')
  )
}
