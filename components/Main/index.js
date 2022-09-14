import { useRouter } from 'next/router'

import Input from '../Input'
import styles from '../../styles/Form.module.css'

import AreaClientsMain from './AreaClientsMain'

export default function Main() {
  const router = useRouter()

  if (router.pathname === '/area-clientes') return <AreaClientsMain />

  return (
    <section className={styles.main}>
      <Input onChange={() => console.log(router)} />
    </section>
  )
}
