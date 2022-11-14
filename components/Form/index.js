import { useRouter } from 'next/router'

import Input from '../Input'
import styles from './Form.module.css'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import CreateOrderForm from './CreateOrderForm'
import ImportOrdersForm from './ImportOrdersForm'
import UpdateProfileForm from './UpdateProfileForm'

export default function Form({ user, createOrder }) {
  const router = useRouter()

  if (router.asPath === '/sign-in') return <SignInForm />
  if (router.asPath === '/sign-up') return <SignUpForm />
  if (router.asPath === '/clients-area/create-order') return <CreateOrderForm user={user} createOrder={createOrder} />
  if (router.asPath === '/clients-area/import-orders') return <ImportOrdersForm user={user} />
  if (router.asPath === '/clients-area/profile') return <UpdateProfileForm user={user} />

  return (
    <form className={styles.form}>
      <Input onChange={() => console.log(router)} />
    </form>
  )
}
