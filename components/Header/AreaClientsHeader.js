import styles from '../../styles/AreaClientsHeader.module.css'
import PhotoProfile from '../PhotoProfile'
import Title from '../Title'

export default function AreaClientsHeader() {
  return <header className={styles.header}> <Title /> <PhotoProfile /> </header>
}
