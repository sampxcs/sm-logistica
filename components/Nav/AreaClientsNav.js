import styles from '../../styles/AreaClientsNav.module.css'
import Link from 'next/link'
import UserRegularIcon from '../Icons/UserRegularIcon'
import BoxIcon from '../Icons/BoxIcon'
import BoxesIcon from '../Icons/BoxesIcon'
import BoxUpIcon from '../Icons/BoxUpIcon'
import GridIcon from '../Icons/GridIcon'

export default function AreaClientsNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.active}>
          <Link href="/area-clientes">
            <a>
              <GridIcon />
              Inicio
            </a>
          </Link>
        </li>
        <hr />
        <small>Pedidos</small>
        <li>
          <Link href="/area-clientes">
            <a>
            <BoxIcon width="16" />
              Crear Pedido
            </a>
          </Link>
        </li>
        <li>
          <Link href="/area-clientes">
            <a>
              <BoxUpIcon width="15" />
              Importar Pedidos
            </a>
          </Link>
        </li>
        <li>
          <Link href="/area-clientes">
            <a>
              <BoxesIcon width="16" />
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
