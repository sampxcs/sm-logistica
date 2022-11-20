import { useRouter } from 'next/router'

import Input from '../Input'
import styles from './Form.module.css'
import CreateOrderForm from './CreateOrderForm'
import ImportOrdersForm from './ImportOrdersForm'
import UpdateProfileForm from './UpdateProfileForm'

export default function Form({ user, updateProfile, userStatusCode, createOrder, orderStatusCode }) {
  const router = useRouter()

  if (router.asPath === '/clients-area/create-order')
    return <CreateOrderForm user={user} createOrder={createOrder} orderStatusCode={orderStatusCode} />
  if (router.asPath === '/clients-area/import-orders') return <ImportOrdersForm user={user} />
  if (router.asPath === '/clients-area/profile')
    return <UpdateProfileForm user={user} updateProfile={updateProfile} userStatusCode={userStatusCode} />

  return (
    <form className={styles.form}>
      <Input onChange={() => console.log(router)} />
    </form>
  )
}
