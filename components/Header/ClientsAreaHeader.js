import Link from 'next/link'
import styles from './Header.module.css'
import CardProfile from '../CardProfile'
import Title from '../Title'

export default function ClientsAreaHeader() {
  return (
    <header className={styles.header}>
      <Title />
      <ul>
        <Link href='/docs/admin'>AYUDA</Link>
        <CardProfile />
      </ul>
    </header>
  )
}
