import { useRouter } from 'next/router'

import MyOrdersTable from './MyOrdersTable'
import UsersTable from './UsersTable'
import AccountTable from './AccountTable'

export default function Main() {
  const router = useRouter()

  if (router.asPath === '/clients-area/my-orders') return <MyOrdersTable />
  if (router.asPath === '/clients-area/users') return <UsersTable />
  if (router.asPath === '/clients-area/account') return <AccountTable />
}
