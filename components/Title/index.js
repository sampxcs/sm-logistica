import Link from 'next/link'
import styles from './Title.module.css'

import LogoIcon from '../Icons/LogoIcon'

export default function Title() {
  return (
    <Link href='/'>
      <a className={styles.title}>
        <LogoIcon width='28' height='28' />
        SM LOGISTICA
      </a>
    </Link>
  )
}
