import { useRouter } from 'next/router'
import ClientsAreaHeader from './ClientsAreaHeader'

export default function Header() {
  const router = useRouter()

  if (router.pathname === '/clients-area/[site]') return <ClientsAreaHeader />
}
