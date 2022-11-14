import { useRouter } from 'next/router'
import useUser from '../../hooks/useUser'

import ClientsAreaAdmin from './ClientsAreaAdmin'
import ClientsAreaCreateOrder from './ClientsAreaCreateOrder'
import ClientsAreaImportOrders from './ClientsAreaImportOrders'
import ClientsAreaMyOrders from './ClientsAreaMyOrders'
import ClientsAreaUsers from './ClientsAreaUsers'
import ClientsAreaProfile from './ClientsAreaProfile'
import ClientsAreaAccount from './ClientsAreaAccount'
import ClientsAreaRates from './ClientsAreaRates'

import DocsPackingConditions from './DocsPackingConditions'

export default function Main() {
  const { user, orderStatusCode, createOrder, deleteOrder } = useUser()
  const router = useRouter()

  if (router.asPath === '/clients-area/admin') return <ClientsAreaAdmin user={user} />
  if (router.asPath === '/clients-area/create-order')
    return <ClientsAreaCreateOrder user={user} createOrder={createOrder} orderStatusCode={orderStatusCode} />
  if (router.asPath === '/clients-area/import-orders') return <ClientsAreaImportOrders user={user} />
  if (router.asPath === '/clients-area/my-orders') return <ClientsAreaMyOrders user={user} deleteOrder={deleteOrder} />
  if (router.asPath === '/clients-area/users') return <ClientsAreaUsers user={user} />
  if (router.asPath === '/clients-area/profile') return <ClientsAreaProfile user={user} />
  if (router.asPath === '/clients-area/account') return <ClientsAreaAccount user={user} />
  if (router.asPath === '/clients-area/rates') return <ClientsAreaRates user={user} />
  if (router.asPath === '/docs/packing-conditions') return <DocsPackingConditions user={user} />
}
