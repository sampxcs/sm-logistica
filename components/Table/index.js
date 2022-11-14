import { useRouter } from 'next/router'

import MyOrdersTable from './MyOrdersTable'
import UsersTable from './UsersTable'
import AccountTable from './AccountTable'

export default function Table({ user }) {
  const router = useRouter()

  if (router.asPath === '/clients-area/my-orders') return <MyOrdersTable user={user} />
  if (router.asPath === '/clients-area/users') return <UsersTable user={user} />
  if (router.asPath === '/clients-area/account') return <AccountTable user={user} />
}
