import styles from './Form.module.css'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { ERRORS, USER_STATUS } from '../../utils/dictionary'
import useUser from '../../hooks/useUser'

import Button from '../Button'
import Input from '../Input'
import Title from '../Title'

import ArrowRightToBracketIcon from '../Icons/ArrowRightToBracketIcon'
import GoogleIcon from '../Icons/GoogleIcon'

export default function SignUpForm() {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState()
  const { userStatusCode, createUserWithEmail } = useUser()

  useEffect(() => {
    userStatusCode === USER_STATUS.OK && router.replace('/clients-area/admin')
  }, [userStatusCode, router])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    let error

    const data = {
      role: 'admin',
      name: e.target.name.value,
      lastName: e.target.lastName.value,
      company: e.target.company.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
      checkbox: e.target.checkbox.checked,
    }

    if (!data.checkbox) error = ERRORS.CHECK_BOX_REQUIRED
    if (!data.confirmPassword) error = ERRORS.CONFIRM_PASSWORD_REQUIRED
    if (data.password !== data.confirmPassword) error = ERRORS.INVALID_CONFIRMED_PASSWORD
    if (data.password.length < 6) error = ERRORS.PASSWORD_REQUIRED
    if (!data.email) error = ERRORS.EMAIL_REQUIRED
    if (data.name.length < 2) error = ERRORS.NAME_REQUIRED

    if (!error) {
      try {
        await createUserWithEmail(data)
      } catch (e) {
        console.log({ e })
        setErrorMessage(e.message)
      }
    } else {
      setErrorMessage(error)
    }
  }

  return (
    <form className={styles.smallForm} onSubmit={handleSubmit}>
      <Title />
      <h1 className={styles.title}>Registrar usuario</h1>
      <div className={styles.div}>
        <div className={styles.inputsContainer}>
          <Input
            type={'text'}
            name="name"
            label={'Nombre *'}
            error={errorMessage === ERRORS.NAME_REQUIRED && ERRORS.NAME_REQUIRED}
            title={'El nombre debe tener por lo menos 2 caracteres'}
            onChange={() => setErrorMessage('')}
          />
          <Input type={'text'} name="lastName" label={'Apellido'} title={'Introduce tu apellido'} />
        </div>
        <Input
          type={'text'}
          name="company"
          label={'Nombre de comercio'}
          title={'Nombre que queres que aparezca en los envios como remitente"'}
          onChange={() => setErrorMessage('')}
        />
        <Input
          type={'email'}
          name={'email'}
          label={'Email *'}
          error={
            (errorMessage === ERRORS.EMAIL_REQUIRED && ERRORS.EMAIL_REQUIRED) ||
            (errorMessage === ERRORS.EMAIL_DUPLICATE && ERRORS.EMAIL_DUPLICATE)
          }
          title={'Introduce tu email'}
          onChange={() => setErrorMessage('')}
        />
        <Input
          type={'password'}
          name={'password'}
          label={'Contrase??a (min 6 digitos) *'}
          error={errorMessage === ERRORS.PASSWORD_REQUIRED && ERRORS.PASSWORD_REQUIRED}
          title="La contrase??a debe tener por lo menos 6 caracteres"
          onChange={() => setErrorMessage('')}
        />
        <Input
          type={'password'}
          name={'confirmPassword'}
          label={'Confirma la contrase??a *'}
          error={
            (errorMessage === ERRORS.CONFIRM_PASSWORD_REQUIRED && ERRORS.CONFIRM_PASSWORD_REQUIRED) ||
            (errorMessage === ERRORS.INVALID_CONFIRMED_PASSWORD && ERRORS.INVALID_CONFIRMED_PASSWORD)
          }
          title="Las contrase??as deben coincidir"
          onChange={() => setErrorMessage('')}
        />
        <Input
          type="checkbox"
          name={'checkbox'}
          label={`Acepto los teminos y condiciones *`}
          error={errorMessage === ERRORS.CHECK_BOX_REQUIRED && ERRORS.CHECK_BOX_REQUIRED}
          title="Acepta los teminos y condiciones"
          onChange={() => setErrorMessage('')}
        />
      </div>
      <div className={styles.div}>
        <Button loading={userStatusCode === 1} className={'formButton'}>
          Crear Cuenta <ArrowRightToBracketIcon width={16} />
        </Button>
        <p className={styles.subTitle}>O continua con</p>
        <Button type={'button'} light className={'formButton'}>
          <GoogleIcon width={16} /> Google
        </Button>
        <small className={styles.small}>
          ??Ya tenes una cuenta?,
          <Link href="/sign-in">
            <a className={styles.a}> Inicia sesion!</a>
          </Link>
        </small>
      </div>
    </form>
  )
}
