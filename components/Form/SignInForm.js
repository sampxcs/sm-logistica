import styles from './Form.module.css'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { ERRORS } from '../../utils/dictionary'
import useUser from '../../hooks/useUser'

import Input from '../Input'
import Button from '../Button'

export default function SignInForm() {
  const router = useRouter()
  const [error, setError] = useState()
  const { user, userStatusCode, signIn } = useUser()

  useEffect(() => {
    console.log(user)
    user && router.replace('/clients-area/admin')
  }, [user, router])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    }

    try {
      await signIn(data)
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <form className={styles.smallForm} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Inicia sesion</h1>
      <div className={styles.div}>
        <Input
          type={'email'}
          name={'email'}
          label={'Email'}
          error={error === ERRORS.EMAIL_REQUIRED ? ERRORS.EMAIL_REQUIRED : error === ERRORS.INVALID_EMAIL ? ERRORS.INVALID_EMAIL : false}
          title={'Introduce tu email'}
        />
        <Input
          type={'password'}
          name={'password'}
          label={'Contraseña'}
          error={
            error === ERRORS.PASSWORD_REQUIRED
              ? ERRORS.PASSWORD_REQUIRED
              : error === ERRORS.INVALID_PASSWORD
              ? ERRORS.INVALID_PASSWORD
              : false
          }
          title="Por favor, introduzca su contraseña"
        />
        <small className={styles.small}>
          <Link href="/sign-up">
            <a className={styles.a}>¿Has olvidado tu contraseña?</a>
          </Link>
        </small>
      </div>
      <div className={styles.div}>
        <Button disabled={userStatusCode === 1} className={'formButton'}>
          Inicia Sesion
        </Button>
        <p className={styles.subTitle}>O continua con</p>
        <Button type={'button'} light className={'formButton'}>
          Google
        </Button>
        <small className={styles.small}>
          ¿No tenes una cuenta?,{' '}
          <Link href="/sign-up">
            <a className={styles.a}>Registrate ahora!</a>
          </Link>
        </small>
      </div>
    </form>
  )
}
