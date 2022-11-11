import styles from './Header.module.css'

import Title from '../Title'

export default function ClientsAreaHeader() {
  return (
    <header className={styles.header}>
      <Title /> <h3>Documentacion</h3>
    </header>
  )
}
