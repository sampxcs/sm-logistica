import { useRouter } from 'next/router'
import ClientsAreaNav from './ClientsAreaNav'

export default function Nav() {
  const router = useRouter()

  if (router.pathname === '/clients-area/[site]') return <ClientsAreaNav />
}
