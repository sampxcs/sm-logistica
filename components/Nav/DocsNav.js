import styles from './Nav.module.css'
import Link from 'next/link'
import BoxIcon from '../Icons/BoxIcon'
import { useRouter } from 'next/router'
import Button from '../Button'
import HeadsetIcon from '../Icons/HeadsetIcon'
import FolderIcon from '../Icons/FolderIcon'

export default function ClientsAreaNav() {
  const router = useRouter()

  const isActive = (pathname) => {
    return router.asPath === pathname ? styles.active : ''
  }

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={isActive('/docs/admin')}>
          <Link href="/docs/admin">
            <Button dark>
              <FolderIcon width="16" />
              Documentacion
            </Button>
          </Link>
        </li>
        <li className={isActive('/docs/packing-conditions')}>
          <Link href="/docs/packing-conditions">
            <Button dark>
              <BoxIcon width="18" />
              Condiciones de Embalaje
            </Button>
          </Link>
        </li>
        <li>
          <Link href="#">
            <Button dark>
              <HeadsetIcon width="16" />
              Atención al Cliente
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
