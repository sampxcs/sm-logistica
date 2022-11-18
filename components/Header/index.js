import { useRouter } from 'next/router'

import ClientsAreaHeader from './ClientsAreaHeader'
import DocsHeader from './DocsHeader'
import HomeHeader from './HomeHeader'

export default function Header() {
  const router = useRouter()

  if (router.pathname === '/clients-area/[site]') return <ClientsAreaHeader />
  if (router.pathname === '/clients-area/order/[id]') return <ClientsAreaHeader />
  if (router.pathname === '/docs/[site]') return <DocsHeader />
  if (router.pathname === '/') return <HomeHeader />
}
