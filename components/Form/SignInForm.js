import styles from './Form.module.css'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { ERRORS } from '../../utils/dictionary'
import useUser from '../../hooks/useUser'

import Title from '../Title'
import Input from '../Input'
import Button from '../Button'

import ArrowRightToBracketIcon from '../Icons/ArrowRightToBracketIcon'
import GoogleIcon from '../Icons/GoogleIcon'

export default function SignInForm() {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState()
  const { user, userStatusCode, signIn } = useUser()

  useEffect(() => {
    user && router.replace('/clients-area/admin')
  }, [user, router])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    }

    try {
      await signIn(data)
    } catch (e) {
      setErrorMessage(e.message)
    }
  }

  return (
    <form className={styles.smallForm} onSubmit={handleSubmit}>
      <Title />
      <h1 className={styles.title}>Inicia sesion</h1>
      <div className={styles.div}>
        <Input
          type={'email'}
          name={'email'}
          label={'Email'}
          error={
            (errorMessage === ERRORS.EMAIL_REQUIRED && ERRORS.EMAIL_REQUIRED) ||
            (errorMessage === ERRORS.INVALID_EMAIL && ERRORS.INVALID_EMAIL)
          }
          title={'Introduce tu email'}
          onChange={() => setErrorMessage('')}
        />
        <Input
          type={'password'}
          name={'password'}
          label={'Contraseña'}
          error={
            (errorMessage === ERRORS.PASSWORD_REQUIRED && ERRORS.PASSWORD_REQUIRED) ||
            (errorMessage === ERRORS.INVALID_PASSWORD && ERRORS.INVALID_PASSWORD)
          }
          title="Por favor, introduzca su contraseña"
          onChange={() => setErrorMessage('')}
        />
        <small className={styles.small}>
          <Link href="/sign-up">
            <a className={styles.a}>¿Has olvidado tu contraseña?</a>
          </Link>
        </small>
      </div>
      <div className={styles.div}>
        <Button loading={userStatusCode === 1} className={'formButton'}>
          Inicia Sesion <ArrowRightToBracketIcon width={16} />
        </Button>
        <p className={styles.subTitle}>O continua con</p>
        <Button type={'button'} light className={'formButton'}>
          <GoogleIcon width={16} />
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
