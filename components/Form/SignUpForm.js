import Link from 'next/link'
import Input from '../Input'
import Button from '../Button'
import styles from '../../styles/Form.module.css'
import { useState } from 'react'

const ERRORS = {
  NAME_REQUIRED: 'El nombre debe tener por lo menos dos caracteres',
  EMAIL_REQUIRED: 'Por favor, introduzca una dirección de correo electrónico valida',
  PASSWORD_REQUIRED: 'La contraseña debe tener minimo 6 digitos',
  CONFIRM_PASSWORD_REQUIRED: 'Por favor, confirma la contraseña',
  INVALID_CONFIRMED_PASSWORD: 'Las contraseñas no coinciden',
}

export default function SignUpForm() {
  const [error, setError] = useState()

  console.log(error)
  const handleSubmit = async (e) => {
    e.preventDefault()
    let error
    console.log(error)

    const data = {
      name: e.target.name.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
    }

    if (data.password !== data.confirmPassword) error = ERRORS.INVALID_CONFIRMED_PASSWORD
    if (!data.confirmPassword) error = ERRORS.CONFIRM_PASSWORD_REQUIRED
    if (data.password.length < 4) error = ERRORS.PASSWORD_REQUIRED
    if (!data.email) error = ERRORS.EMAIL_REQUIRED
    if (data.name.length < 2) error = ERRORS.NAME_REQUIRED

    if (!error) {
      console.log('datatatata: ', data)
    } else setError(error)
  }
  return (
    <form className={styles.smallForm} onSubmit={handleSubmit}>
      <h1>Registrar usuario</h1>
      <div className={styles.div}>
        <div className={styles.inputsContainer}>
          <Input
            type={'text'}
            name="name"
            label={'Nombre'}
            info={'patata'}
            error={error === ERRORS.NAME_REQUIRED ? ERRORS.NAME_REQUIRED : false}
            title={'Introduce tu nombre'}
          />
          <Input type={'text'} name="lastName" label={'Apellido'} title={'Introduce tu apellido'} />
        </div>
        <Input
          type={'email'}
          name={'email'}
          label={'Email'}
          error={error === ERRORS.EMAIL_REQUIRED ? ERRORS.EMAIL_REQUIRED : false}
          title={'Introduce tu email'}
        />
        <Input
          type={'password'}
          name={'password'}
          label={'Contraseña'}
          error={error === ERRORS.PASSWORD_REQUIRED ? ERRORS.PASSWORD_REQUIRED : false}
          title="La contraseña debe tener por lo menos 6 caracteres"
        />
        <Input
          type={'password'}
          name={'confirmPassword'}
          label={'Confirma la contraseña'}
          error={
            error === ERRORS.CONFIRM_PASSWORD_REQUIRED
              ? ERRORS.CONFIRM_PASSWORD_REQUIRED
              : error === ERRORS.INVALID_CONFIRMED_PASSWORD
              ? ERRORS.INVALID_CONFIRMED_PASSWORD
              : false
          }
          title="Las contraseñas deben coincidir"
        />
        <small className={styles.checkboxContainer}>
          <Input type="checkbox" required /> Acepto los
          <Link href="/conditions">
            <a className={styles.a}>Terminos y condiciones</a>
          </Link>
        </small>
      </div>
      <div className={styles.div}>
        <Button>Crear Cuenta</Button>
        <p className={styles.subTitle}>O continua con</p>
        <Button type={'button'}>Google</Button>
        <Button type={'button'}>Git Hub</Button>
        <small className={styles.small}>
          ¿Ya tenes una cuenta?,
          <Link href="/sign-in">
            <a className={styles.a}>Inicia sesion!</a>
          </Link>
        </small>
      </div>
    </form>
  )
}
