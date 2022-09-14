import Link from 'next/link'
import Input from '../Input'
import Button from '../Button'
import styles from '../../styles/Form.module.css'

export default function SignUpForm() {
  return (
    <form className={styles.form}>
      <h1>Registrar usuario</h1>
      <div className={styles.div}>
        <div className={styles.inputContainer}>
          <Input placeholder={'Nombre'} />
          <Input placeholder={'Apellido'} />
        </div>
        <Input placeholder={'Email'} />
        <Input placeholder={'Contraseña'} />
        <Input placeholder={'Confirma la contraseña'} />
        <small className={styles.checkboxContainer}>
          <Input type="checkbox" /> Acepto los <Link href="/conditions">Terminos y condiciones</Link>
        </small>
      </div>
      <div className={styles.div}>
        <Button>Inicia Sesion</Button>
        <p>O continua con</p>
        <Button type={'button'}>Google</Button>
        <Button type={'button'}>Git Hub</Button>
        <small>
          ¿Ya tenes una cuenta?, <Link href="/sign-in">Inicia sesion!</Link>
        </small>
      </div>
    </form>
  )
}
