import styles from '../../styles/Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import AreaClientsHeader from './AreaClientsHeader'

export default function Header() {
  const router = useRouter()

  if (router.pathname === '/area-clientes') return <AreaClientsHeader />

  return (
    <header className={styles.nav}>
      <Link href="/">&larr;</Link>
    </header>
  )
}
