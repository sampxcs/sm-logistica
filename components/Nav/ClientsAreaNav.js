import styles from '../../styles/Nav.module.css'
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
    return router.asPath === pathname ? styles.active : ''
  }

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={isActive('/clients-area/admin')}>
          <Link href='/clients-area/admin'>
            <Button dark>
              <GridIcon />
              Inicio
            </Button>
          </Link>
        </li>
        <hr />
        <small>Pedidos</small>
        <li className={isActive('/clients-area/create-order')}>
          <Link href='/clients-area/create-order'>
            <Button dark>
              <BoxIcon width='18' />
              Crear Pedido
            </Button>
          </Link>
        </li>
        <li className={isActive('/clients-area/import-orders')}>
          <Link href='/clients-area/import-orders'>
            <Button dark>
              <BoxUpIcon width='15' />
              Importar Pedidos
            </Button>
          </Link>
        </li>
        <li className={isActive('/clients-area/my-orders')}>
          <Link href='/clients-area/my-orders'>
            <Button dark>
              <BoxesIcon width='16' />
              Mis Pedidos
            </Button>
          </Link>
        </li>
        <hr />
        <small>Cuenta</small>
        <li className={isActive('/clients-area/users')}>
          <Link href='/clients-area/users'>
            <Button dark>
              <UserRegularIcon width='18' height='18' />
              Usuarios
            </Button>
          </Link>
        </li>
        <li className={isActive('/clients-area/account')}>
          <Link href='/clients-area/account'>
            <Button dark>
              <FileInvoiceIcon width='18' height='18' />
              Estado de Cuenta
            </Button>
          </Link>
        </li>
        <li className={isActive('/clients-area/rates')}>
          <Link href='/clients-area/rates'>
            <Button dark>
              <CircleDollarIcon width='18' />
              Tarifas y Pagos
            </Button>
          </Link>
        </li>
        <small>Ayuda</small>
        <li>
          <Link href='/docs/admin'>
            <Button dark>
              <CircleQuestionIcon width='16' />
              Documentación
            </Button>
          </Link>
        </li>
        <li className={isActive('/docs/packing-conditions')}>
          <Link href='/docs/packing-conditions'>
            <Button dark>
              <BoxIcon width='18' />
              Condiciones de Embalaje
            </Button>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <Button dark>
              <HeadsetIcon width='16' />
              Atención al Cliente
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
