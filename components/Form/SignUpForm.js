import Link from 'next/link'
import Input from '../Input'
import Button from '../Button'
import styles from '../../styles/Form.module.css'

export default function SignUpForm() {
  return (
    <form className={styles.smallForm}>
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
          <Input type="checkbox" /> Acepto los <Link href="/conditions"><a className={styles.a}>Terminos y condiciones</a></Link>
        </small>
      </div>
      <div className={styles.div}>
        <Button>Inicia Sesion</Button>
        <p className={styles.p}>O continua con</p>
        <Button type={'button'}>Google</Button>
        <Button type={'button'}>Git Hub</Button>
        <small className={styles.small}>
          ¿Ya tenes una cuenta?, <Link href="/sign-in"><a className={styles.a}>Inicia sesion!</a></Link>
        </small>
      </div>
    </form>
  )
}
