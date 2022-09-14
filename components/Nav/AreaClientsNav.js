import styles from '../../styles/AreaClientsNav.module.css'
import Link from 'next/link'
import BoxesStackedIcon from '../Icons/BoxesStackedIcon'
import UserRegularIcon from '../Icons/UserRegularIcon'
import BoxSolidIcon from '../Icons/BoxSolidIcon'
import BoxPackingSolidIcon from '../Icons/BoxPackingSolidIcon'
import GripSolid from '../Icons/GripSolidIcon'

export default function AreaClientsNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.active}>
          <Link href="/area-clientes">
            <a>Inicio</a>
          </Link>
        </li>
        <hr />
        <small>Pedidos</small>
        <li>
          <Link href="/area-clientes">
            <a>
              <BoxSolidIcon width="12" />
              Crear Pedido
            </a>
          </Link>
        </li>
        <li>
          <Link href="/area-clientes">
            <a>
              <BoxPackingSolidIcon width="12" />
              Importar Pedidos
            </a>
          </Link>
        </li>
        <li>
          <Link href="/area-clientes">
            <a>
              <BoxesStackedIcon width="12" />
              Mis Pedidos
            </a>
          </Link>
        </li>
        <hr />
        <small>Cuenta</small>
        <li>
          <Link href="/area-clientes">
            <a>
              <UserRegularIcon width="12" />
              Usuarios
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
