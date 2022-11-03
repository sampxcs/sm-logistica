import { useRouter } from 'next/router'
import ClientsAreaNav from './ClientsAreaNav'
import styles from '../../styles/Nav.module.css'
import Link from 'next/link'

export default function Nav() {
  const router = useRouter()

  if (router.pathname === '/clients-area/[site]') return <ClientsAreaNav />

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <div className={styles.arrowContainer}>
          <span className={styles.arrow}></span>
        </div>
      </Link>
    </nav>
  )
}
