import Input from '../Input'
import Button from '../Button'
import styles from './Form.module.css'

export default function UpdateProfileForm({ user }) {
  return (
    <form className={styles.form}>
      <h3 className={styles.h3}>Datos de Remitente:</h3>
      <div className={styles.div}>
        <div className={styles.inputsContainer}>
          <Input
            type='text'
            disabled={user.role !== 'admin'}
            id='name'
            name='name'
            label='Nombre *'
            defaultValue={user.displayName}
            required
          />
          <Input type='number' disabled={user.role !== 'admin'} id='document' name='document' label='Documento *' required />
        </div>
        <div className={styles.inputsContainer}>
          <Input type='number' disabled={user.role !== 'admin'} id='cuit' name='cuit' label='CUIT *' required />
          <Input type='email' disabled={user.role !== 'admin'} id='email' name='email' label='Email *' defaultValue={user.email} required />
        </div>
        <div className={styles.inputsContainer}>
          <Input
            type='text'
            disabled={user.role !== 'admin'}
            id='business name'
            name='business name'
            label='Nombre de Comercio'
            info='Nombre que queres que aparezca en los envios como remitente'
            defaultValue={user.company}
          />
          <Input
            type='tel'
            disabled={user.role !== 'admin'}
            id='phone'
            name='phone'
            label='Telefono *'
            info='Código de área + Nº. Ejemplo: 1123456789.'
            required
          />
        </div>
        <Input
          type='text'
          disabled={user.role !== 'admin'}
          id='direccion'
          name='direccion'
          label='Direccion *'
          info='Direccion completa con numero de calle.'
          required
        />
        <div className={styles.inputsContainer}>
          <Input
            type='text'
            disabled={user.role !== 'admin'}
            id='especificacion'
            name='especificacion'
            label='Especificacion de la direccion *'
            info='Piso, departamento, bloque, torre, local, galeria, entre calles, etc.'
            required
          />
          <Input
            type='number'
            disabled={user.role !== 'admin'}
            id='cp'
            name='cp'
            label='Codigo Postal *'
            info={
              <a className={styles.aSearchCP} href='https://codigopostal.com.ar/' target='_blank' rel='noreferrer'>
                (+) BUSCAR CODIGO POSTAL
              </a>
            }
            required
          />
        </div>
      </div>
      <div className={styles.inputBoxContainer}>
        <Input type='checkbox' disabled={user.role !== 'admin'} id='notificaciones' />{' '}
        <label htmlFor='notificaciones'>Recibir notificaciones por correo.</label>
      </div>
      <Button className={'formButton'} width={'max-content'}>
        GUARDAR
      </Button>
    </form>
  )
}
