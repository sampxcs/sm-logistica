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
  const { user, orderStatusCode, userStatusCode, updateProfile, createOrder, deleteOrder } = useUser()

  const router = useRouter()
  const { id } = router.query

  if (router.asPath === '/clients-area/admin') return <ClientsAreaAdmin user={user} />
  if (router.asPath === '/clients-area/create-order')
    return <ClientsAreaCreateOrder user={user} createOrder={createOrder} orderStatusCode={orderStatusCode} />
  if (router.asPath === '/clients-area/import-orders') return <ClientsAreaImportOrders user={user} />
  if (router.asPath === '/clients-area/my-orders') return <ClientsAreaMyOrders user={user} deleteOrder={deleteOrder} />
  if (router.asPath === `/clients-area/order/${id}`) return <h1>ORDER ID IS {id}</h1>
  if (router.asPath === '/clients-area/users') return <ClientsAreaUsers user={user} />
  if (router.asPath === '/clients-area/profile')
    return <ClientsAreaProfile user={user} updateProfile={updateProfile} userStatusCode={userStatusCode} />
  if (router.asPath === '/clients-area/account') return <ClientsAreaAccount user={user} />
  if (router.asPath === '/clients-area/rates') return <ClientsAreaRates user={user} />
  if (router.asPath === '/docs/packing-conditions') return <DocsPackingConditions />

  return router.replace('/404')
}
