import Link from 'next/link'
import styles from '../../styles/Title.module.css'

export default function Title() {
  return (
    <Link href='/'>
      <a className={styles.title}>SM Logística</a>
    </Link>
  )
}
