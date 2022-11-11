import styles from './Nav.module.css'
import Link from 'next/link'
import UserRegularIcon from '../Icons/UserRegularIcon'
import BoxIcon from '../Icons/BoxIcon'
import BoxesIcon from '../Icons/BoxesIcon'
import BoxUpIcon from '../Icons/BoxUpIcon'
import GridIcon from '../Icons/GridIcon'
import { useRouter } from 'next/router'
import Button from '../Button'
import HeadsetIcon from '../Icons/HeadsetIcon'
import CircleQuestionIcon from '../Icons/CircleQuestionIcon'
import CircleDollarIcon from '../Icons/CircleDollarIcon'
import FileInvoiceIcon from '../Icons/FileInvoiceIcon'

export default function ClientsAreaNav() {
  const router = useRouter()

  const isActive = (pathname) => {
    return router.asPath === pathname ? true : false
  }

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Button href="/clients-area/admin" className="navLeftButton" light active={isActive('/clients-area/admin')}>
            <GridIcon />
            Inicio
          </Button>
        </li>
        <hr />
        <small>Pedidos</small>
        <li>
          <Button href="/clients-area/create-order" className="navLeftButton" light active={isActive('/clients-area/create-order')}>
            <BoxIcon width="18" />
            Crear Pedido
          </Button>
        </li>
        <li className={isActive('/clients-area/import-orders')}>
          <Button href="/clients-area/import-orders" className="navLeftButton" light active={isActive('/clients-area/import-orders')}>
            <BoxUpIcon width="15" />
            Importar Pedidos
          </Button>
        </li>
        <li className={isActive('/clients-area/my-orders')}>
          <Button href="/clients-area/my-orders" className="navLeftButton" light active={isActive('/clients-area/my-orders')}>
            <BoxesIcon width="16" />
            Mis Pedidos
          </Button>
        </li>
        <hr />
        <small>Cuenta</small>
        <li className={isActive('/clients-area/users')}>
          <Button href="/clients-area/users" className="navLeftButton" light active={isActive('/clients-area/users')}>
            <UserRegularIcon width="18" height="18" />
            Usuarios
          </Button>
        </li>
        <li className={isActive('/clients-area/account')}>
          <Button href="/clients-area/account" className="navLeftButton" light active={isActive('/clients-area/account')}>
            <FileInvoiceIcon width="18" height="18" />
            Estado de Cuenta
          </Button>
        </li>
        <li className={isActive('/clients-area/rates')}>
          <Button href="/clients-area/rates" className="navLeftButton" light active={isActive('/clients-area/rates')}>
            <CircleDollarIcon width="18" />
            Tarifas y Pagos
          </Button>
        </li>
        <small>Ayuda</small>
        <li>
          <Button href="/docs/admin" className="navLeftButton" light>
            <CircleQuestionIcon width="16" />
            Documentación
          </Button>
        </li>
        <li>
          <Button href="/docs/packing-conditions" className="navLeftButton" light>
            <BoxIcon width="18" />
            Condiciones de Embalaje
          </Button>
        </li>
        <li>
          <Button href="/docs/admin" className="navLeftButton" light>
            <HeadsetIcon width="16" />
            Atención al Cliente
          </Button>
        </li>
      </ul>
    </nav>
  )
}
