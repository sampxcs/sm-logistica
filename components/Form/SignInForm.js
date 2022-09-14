import Link from 'next/link'
import Input from '../Input'
import Button from '../Button'
import styles from '../../styles/Form.module.css'

export default function SignInForm() {
  return (
    <form className={styles.form}>
      <h1>Inicia sesion</h1>
      <div className={styles.div}>
        <Input placeholder={'Email'} />
        <Input placeholder={'Contraseña'} />
        <small>
          <Link href="/sign-up">¿Has olvidado tu contraseña?</Link>
        </small>
      </div>
      <div className={styles.div}>
        <Button>Inicia Sesion</Button>
        <p>O continua con</p>
        <Button type={'button'}>Google</Button>
        <Button type={'button'}>Git Hub</Button>
        <small>
          ¿No tenes una cuenta?, <Link href="/sign-up">Registrate ahora!</Link>
        </small>
      </div>
    </form>
  )
}
