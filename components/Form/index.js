import { useRouter } from 'next/router'

import Input from '../Input'
import styles from '../../styles/Form.module.css'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import CreateOrderForm from './CreateOrderForm'
import ImportOrdersForm from './ImportOrdersForm'

export default function Form() {
  const router = useRouter()

  if (router.asPath === '/sign-in') return <SignInForm />
  if (router.asPath === '/sign-up') return <SignUpForm />
  if (router.asPath === '/clients-area/create-order') return <CreateOrderForm />
  if (router.asPath === '/clients-area/import-orders') return <ImportOrdersForm />

  return (
    <form className={styles.form}>
      <Input onChange={() => console.log(router)} />
    </form>
  )
}
