import { useRouter } from 'next/router'
import ClientsAreaAdmin from './ClientsAreaAdmin'
import ClientsAreaCreateOrder from './ClientsAreaCreateOrder'
import ClientsAreaImportOrders from './ClientsAreaImportOrders'
import ClientsAreaMyOrders from './ClientsAreaMyOrders'
import ClientsAreaUsers from './ClientsAreaUsers'
import ClientsAreaProfile from './ClientsAreaProfile'

export default function Main() {
  const router = useRouter()

  if (router.asPath === '/clients-area/admin') return <ClientsAreaAdmin />
  if (router.asPath === '/clients-area/create-order') return <ClientsAreaCreateOrder />
  if (router.asPath === '/clients-area/import-orders') return <ClientsAreaImportOrders />
  if (router.asPath === '/clients-area/my-orders') return <ClientsAreaMyOrders />
  if (router.asPath === '/clients-area/users') return <ClientsAreaUsers />
  if (router.asPath === '/clients-area/profile') return <ClientsAreaProfile />
}
