import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

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
import ClientsAreaOrder from './ClientsAreaOrder'

export default function Main() {
  const { user, orderStatusCode, userStatusCode, updateProfile, createOrder, deleteOrder } = useUser()
  const [query, setQuery] = useState()
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return
    const { site } = router.query
    setQuery(site)
  }, [router.query, router.isReady])

  if (!query) return

  const [site, id] = query

  switch (site) {
    case 'admin':
      return <ClientsAreaAdmin user={user} />
    case 'create-order':
      return <ClientsAreaCreateOrder user={user} createOrder={createOrder} orderStatusCode={orderStatusCode} />
    case 'import-orders':
      return <ClientsAreaImportOrders user={user} />
    case 'my-orders':
      return <ClientsAreaMyOrders user={user} deleteOrder={deleteOrder} />
    case 'order':
      return <ClientsAreaOrder user={user} id={id} />
    case 'users':
      return <ClientsAreaUsers user={user} />
    case 'profile':
      return <ClientsAreaProfile user={user} updateProfile={updateProfile} userStatusCode={userStatusCode} />
    case 'account':
      return <ClientsAreaAccount user={user} />
    case 'rates':
      return <ClientsAreaRates user={user} />
    case 'packing-conditions':
      return <DocsPackingConditions />
    default:
      router.replace('/404')
      break
  }
}
