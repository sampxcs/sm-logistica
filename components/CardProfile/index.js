import styles from '../../styles/CardProfile.module.css'
import Link from 'next/link'

export default function CardProfile() {
  return (
    <Link href="/clients-area/profile">
      <a className={styles.card}>
        Ian Rosales <i></i>
      </a>
    </Link>
  )
}
