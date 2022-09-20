import styles from '../../styles/AreaClientsHeader.module.css'
import CardProfile from '../CardProfile'
import Title from '../Title'

export default function ClientsAreaHeader() {
  return (
    <header className={styles.header}>
      <Title />
      <ul>
        <CardProfile />
      </ul>
    </header>
  )
}
