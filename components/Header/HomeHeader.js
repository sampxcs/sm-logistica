import styles from '../../styles/Header.module.css'

import Link from 'next/link'
import Title from '../Title'

export default function ClientsAreaHeader() {
  return (
    <header className={styles.homeHeader}>
      <div className={styles.container}>
        <Title />
        <ul>
          <li>
            <Link href={'/'}>SEGUI TU ENVIO</Link>
          </li>
          <li>
            <Link href={'/'}>COTIZACIONES ONLINE</Link>
          </li>
          <li>
            <Link href={'/docs/admin'}>DOCUMENTACION</Link>
          </li>
        </ul>
        <Link href={'/clients-area/admin'}>
          <a className={styles.button}>Area Clientes</a>
        </Link>
      </div>
    </header>
  )
}
