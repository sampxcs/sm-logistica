import Link from 'next/link'
import Input from '../Input'
import Button from '../Button'
import styles from '../../styles/Form.module.css'

export default function SignInForm() {
  return (
    <form className={styles.smallForm}>
      <h1>Inicia sesion</h1>
      <div className={styles.div}>
        <Input placeholder={'Email'} />
        <Input placeholder={'Contraseña'} />
        <small className={styles.small}>
          <Link href="/sign-up"><a className={styles.a}>¿Has olvidado tu contraseña?</a></Link>
        </small>
      </div>
      <div className={styles.div}>
        <Button>Inicia Sesion</Button>
        <p className={styles.p}>O continua con</p>
        <Button type={'button'}>Google</Button>
        <Button type={'button'}>Git Hub</Button>
        <small className={styles.small}>
          ¿No tenes una cuenta?, <Link href="/sign-up"><a className={styles.a}>Registrate ahora!</a></Link>
        </small>
      </div>
    </form>
  )
}
