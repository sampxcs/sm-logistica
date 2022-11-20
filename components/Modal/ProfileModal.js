import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

import useUser from '../../hooks/useUser'

import UserRegularIcon from '../Icons/UserRegularIcon'
import FileInvoiceIcon from '../Icons/FileInvoiceIcon'
import HeadsetIcon from '../Icons/HeadsetIcon'
import BellIcon from '../Icons/BellIcon'
import ChartIcon from '../Icons/ChartIcon'
import ArrowRightFromBracketIcon from '../Icons/ArrowRightFromBracketIcon'
import LogoIcon from '../Icons/LogoIcon'

import Button from '../Button'

export default function ProfileModal({ closeModal, coords }) {
  const { user, signOut } = useUser()
  return ReactDOM.createPortal(
    <div className={styles.lightBG} onClick={closeModal}>
      <div
        className={`${styles.content} ${styles.profileModal}`}
        style={{
          left: `calc(${coords.x}px - ((${coords.x}px + 280px) - 100%)`,
          top: coords.y,
        }}
      >
        <div className={styles.header}>
          <div className={styles.circleProfile}>
            <LogoIcon width='20' height='20' />
          </div>
          <h2>{user.displayName}</h2>
          <h3>{user.email}</h3>
          <h3>{user.company}</h3>
          <h4>{user.role}</h4>
        </div>
        <div className={styles.main}>
          <Button href='/clients-area/profile' className='navLeftButton' light>
            <UserRegularIcon width='16' height='16' />
            Perfil
          </Button>
          <Button href='/clients-area/notificatrions' className='navLeftButton' light>
            <BellIcon width='16' height='16' />
            Notificaciones
          </Button>
          <Button href='/clients-area/account' className='navLeftButton' light>
            <FileInvoiceIcon width='16' height='16' />
            Estado de Cuenta
          </Button>
          <Button href='/clients-area/charts' className='navLeftButton' light>
            <ChartIcon width='16' height='16' />
            Estadisticas
          </Button>
          <Button href='/docs/admin' className='navLeftButton' light>
            <HeadsetIcon width='16' height='16' />
            Atención al Cliente
          </Button>
        </div>
        <div className={styles.footer}>
          <Button onClick={signOut} className='navLeftButton' light>
            <ArrowRightFromBracketIcon width='16' height='16' />
            Cerrar Sesion
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  )
}
