import Input from '../Input'
import Button from '../Button'
import styles from './Form.module.css'

import { USER_STATUS } from '../../utils/dictionary'

export default function UpdateProfileForm({ user, updateProfile, userStatusCode }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    updateProfile()
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.h3}>Datos de Remitente:</h3>
      <div className={styles.div}>
        <div className={styles.inputsContainer}>
          <Input type="text" disabled={user.role !== 'admin'} id="name" name="name" label="Nombre *" defaultValue={user.displayName} />
          <Input type="number" disabled={user.role !== 'admin'} id="document" name="document" label="Documento *" />
        </div>
        <div className={styles.inputsContainer}>
          <Input type="number" disabled={user.role !== 'admin'} id="cuit" name="cuit" label="CUIT *" />
          <Input type="email" disabled={user.role !== 'admin'} id="email" name="email" label="Email *" defaultValue={user.email} />
        </div>
        <div className={styles.inputsContainer}>
          <Input
            type="text"
            disabled={user.role !== 'admin'}
            id="business name"
            name="business name"
            label="Nombre de Comercio"
            info="Nombre que queres que aparezca en los envios como remitente"
            defaultValue={user.company}
          />
          <Input
            type="tel"
            disabled={user.role !== 'admin'}
            id="phone"
            name="phone"
            label="Telefono *"
            info="Código de área + Nº. Ejemplo: 1123456789."
          />
        </div>
        <Input
          type="text"
          disabled={user.role !== 'admin'}
          id="direccion"
          name="direccion"
          label="Direccion *"
          info="Direccion completa con numero de calle."
        />
        <div className={styles.inputsContainer}>
          <Input
            type="text"
            disabled={user.role !== 'admin'}
            id="especificacion"
            name="especificacion"
            label="Especificacion de la direccion *"
            info="Piso, departamento, bloque, torre, local, galeria, entre calles, etc."
          />
          <Input
            type="number"
            disabled={user.role !== 'admin'}
            id="cp"
            name="cp"
            label="Codigo Postal *"
            info={
              <a className={styles.aSearchCP} href="https://codigopostal.com.ar/" target="_blank" rel="noreferrer">
                (+) BUSCAR CODIGO POSTAL
              </a>
            }
          />
        </div>
      </div>
      <div className={styles.inputBoxContainer}>
        <Input type="checkbox" disabled={user.role !== 'admin'} id="notificaciones" />{' '}
        <label htmlFor="notificaciones">Recibir notificaciones por correo.</label>
      </div>
      <Button className={'formButton'} width={'120px'} disabled={userStatusCode === USER_STATUS.LOADING}>
        GUARDAR
      </Button>
    </form>
  )
}
