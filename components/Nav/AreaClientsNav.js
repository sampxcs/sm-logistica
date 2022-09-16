import styles from '../../styles/AreaClientsNav.module.css'
import Link from 'next/link'
import UserRegularIcon from '../Icons/UserRegularIcon'
import BoxIcon from '../Icons/BoxIcon'
import BoxesIcon from '../Icons/BoxesIcon'
import BoxUpIcon from '../Icons/BoxUpIcon'
import GridIcon from '../Icons/GridIcon'
import { useRouter } from 'next/router'

export default function AreaClientsNav() {
  const router = useRouter()

  const isActive = (pathname) => {
    return router.asPath === pathname ? styles.active : ""
  }

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={isActive("/area-clientes/inicio")}>
          <Link href="/area-clientes/inicio">
            <a>
              <GridIcon />
              Inicio
            </a>
          </Link>
        </li>
        <hr />
        <small>Pedidos</small>
        <li className={isActive("/area-clientes/crear-pedido")}>
          <Link href="/area-clientes/crear-pedido">
            <a>
            <BoxIcon width="16" />
              Crear Pedido
            </a>
          </Link>
        </li>
        <li className={isActive("/area-clientes/importar-pedidos")}>
          <Link href="/area-clientes/importar-pedidos">
            <a>
              <BoxUpIcon width="15" />
              Importar Pedidos
            </a>
          </Link>
        </li>
        <li className={isActive("/area-clientes/mis-pedidos")}>
          <Link href="/area-clientes/mis-pedidos">
            <a>
              <BoxesIcon width="16" />
              Mis Pedidos
            </a>
          </Link>
        </li>
        <hr />
        <small>Cuenta</small>
        <li className={isActive("/area-clientes/usuarios")}>
          <Link href="/area-clientes/usuarios">
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
