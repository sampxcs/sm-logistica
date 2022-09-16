import styles from '../../styles/Nav.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import AreaClientsNav from './AreaClientsNav'

export default function Nav() {
  const router = useRouter()

  if (router.pathname === '/area-clientes/[site]') return <AreaClientsNav />
  
}
