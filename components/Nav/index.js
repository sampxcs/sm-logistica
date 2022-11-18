import { useRouter } from 'next/router'

import ClientsAreaNav from './ClientsAreaNav'
import DocsNav from './DocsNav'

export default function Nav() {
  const router = useRouter()

  if (router.pathname === '/clients-area/[site]') return <ClientsAreaNav />
  if (router.pathname === '/clients-area/order/[id]') return <ClientsAreaNav />
  if (router.pathname === '/docs/[site]') return <DocsNav />
}
