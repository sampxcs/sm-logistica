import { useRouter } from 'next/router'
import Link from 'next/link'

import Input from '../Input'
import Button from '../Button'
import styles from '../../styles/Form.module.css'
import FormSignIn from '../FormSignIn'
import FormSignUp from '../FormSignUp'

export default function Form() {
  const router = useRouter()

  if (router.pathname === '/sign-in') return <FormSignIn />
  if (router.asPath === '/sign-up') return <FormSignUp />

  return (
    <form className={styles.form}>
      <Input onChange={() => console.log(router)} />
    </form>
  )
}
