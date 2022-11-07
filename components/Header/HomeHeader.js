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
            <Link href={'/'}>SERVICIOS</Link>
          </li>
          <li>
            <Link href={'/docs/admin'}>DOCUMENTACION</Link>
          </li>
          <li>
            <Link href={'/'}>SEGUI TU ENVIO</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={'/'}>AYUDA</Link>
          </li>
          <li>
            <Link href={'/clients-area/admin'}>
              <a className={styles.button}>AREA CLIENTES</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
