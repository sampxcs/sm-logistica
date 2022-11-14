import Link from 'next/link'
import Input from '../Input'
import Button from '../Button'
import styles from './Form.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useUser from '../../hooks/useUser'
import { ERRORS } from '../../utils/dictionary'

export default function SignUpForm() {
  const router = useRouter()
  const [error, setError] = useState()
  const { user, userStatusCode, createUserWithEmail } = useUser()

  useEffect(() => {
    user && router.replace('/clients-area/admin')
  }, [user, router])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

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

    try {
      await createUserWithEmail(data)
    } catch (e) {
      console.log({ e })
      setError(e.message)
    }
  }

  return (
    <form className={styles.smallForm} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Registrar usuario</h1>
      <div className={styles.div}>
        <div className={styles.inputsContainer}>
          <Input
            type={'text'}
            name="name"
            label={'Nombre *'}
            error={error === ERRORS.NAME_REQUIRED && ERRORS.NAME_REQUIRED}
            title={'El nombre debe tener por lo menos 2 caracteres'}
          />
          <Input type={'text'} name="lastName" label={'Apellido'} title={'Introduce tu apellido'} />
        </div>
        <Input
          type={'text'}
          name="company"
          label={'Nombre de comercio'}
          title={'Nombre que queres que aparezca en los envios como remitente"'}
        />
        <Input
          type={'email'}
          name={'email'}
          label={'Email *'}
          error={(error === ERRORS.EMAIL_REQUIRED && ERRORS.EMAIL_REQUIRED) || (error === ERRORS.EMAIL_DUPLICATE && ERRORS.EMAIL_DUPLICATE)}
          title={'Introduce tu email'}
        />
        <Input
          type={'password'}
          name={'password'}
          label={'Contraseña (min 6 digitos) *'}
          error={error === ERRORS.PASSWORD_REQUIRED && ERRORS.PASSWORD_REQUIRED}
          title="La contraseña debe tener por lo menos 6 caracteres"
        />
        <Input
          type={'password'}
          name={'confirmPassword'}
          label={'Confirma la contraseña *'}
          error={
            (error === ERRORS.CONFIRM_PASSWORD_REQUIRED && ERRORS.CONFIRM_PASSWORD_REQUIRED) ||
            (error === ERRORS.INVALID_CONFIRMED_PASSWORD && ERRORS.INVALID_CONFIRMED_PASSWORD)
          }
          title="Las contraseñas deben coincidir"
        />
        <Input
          type="checkbox"
          name={'checkbox'}
          label={`Acepto los teminos y condiciones *`}
          error={error === ERRORS.CHECK_BOX_REQUIRED && ERRORS.CHECK_BOX_REQUIRED}
          title="Acepta los teminos y condiciones"
        />
      </div>
      <div className={styles.div}>
        <Button disabled={userStatusCode === 1} className={'formButton'}>
          Crear Cuenta
        </Button>
        <p className={styles.subTitle}>O continua con</p>
        <Button type={'button'} light className={'formButton'}>
          Google
        </Button>
        <small className={styles.small}>
          ¿Ya tenes una cuenta?,
          <Link href="/sign-in">
            <a className={styles.a}> Inicia sesion!</a>
          </Link>
        </small>
      </div>
    </form>
  )
}
