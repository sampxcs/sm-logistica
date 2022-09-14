import { useRouter } from 'next/router'

import Input from '../Input'
import styles from '../../styles/Form.module.css'

import AreaClientsHomeMain from './AreaClientsHomeMain'

export default function Main() {
  const router = useRouter()

  if (router.pathname === '/area-clientes/inicio') return <AreaClientsHomeMain />
  if (router.pathname === '/area-clientes/crear-pedido') return <AreaClientsHomeMain />
  if (router.pathname === '/area-clientes/importar-pedidos') return <AreaClientsHomeMain />
  if (router.pathname === '/area-clientes/usuarios') return <AreaClientsHomeMain />

  return (
    <section className={styles.main}>
      <Input onChange={() => console.log(router)} />
    </section>
  )
}
