import styles from '../../styles/Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ClientsAreaHeader from './ClientsAreaHeader'

export default function Header() {
  const router = useRouter()

  if (router.pathname === '/clients-area/[site]') return <ClientsAreaHeader />

  return (
    <header className={styles.nav}>
      <Link href="/">&larr;</Link>
    </header>
  )
}
