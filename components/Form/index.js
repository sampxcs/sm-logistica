import { useRouter } from 'next/router'

import Input from '../Input'
import styles from '../../styles/Form.module.css'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

export default function Form() {
  const router = useRouter()

  if (router.pathname === '/sign-in') return <SignInForm />
  if (router.asPath === '/sign-up') return <SignUpForm />

  return (
    <form className={styles.form}>
      <Input onChange={() => console.log(router)} />
    </form>
  )
}
