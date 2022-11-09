import styles from '../../styles/Header.module.css'

import Link from 'next/link'
import Title from '../Title'
import Button from '../Button'

export default function HomeHeader() {
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
            <Button href={'/clients-area/admin'} className='buttonPrimary'>
              AREA CLIENTES
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
