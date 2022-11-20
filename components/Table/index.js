import { useRouter } from 'next/router'

import MyOrdersTable from './MyOrdersTable'
import UsersTable from './UsersTable'
import AccountTable from './AccountTable'

export default function Table({ className, user, deleteOrder }) {
  if (className === 'myOrdersTable') return <MyOrdersTable user={user} deleteOrder={deleteOrder} />
  if (className === 'usersTable') return <UsersTable user={user} />
  if (className === 'accountTable') return <AccountTable user={user} />
}
