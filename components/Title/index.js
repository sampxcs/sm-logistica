import Link from 'next/link'
import styles from './Title.module.css'

export default function Title() {
  return (
    <Link href="/">
      <a className={styles.title}>SM LOGISTICA</a>
    </Link>
  )
}
