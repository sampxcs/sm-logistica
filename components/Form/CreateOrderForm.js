import { useState } from 'react'
import styles from './Form.module.css'

import Input from '../Input'
import Button from '../Button'

import { provinces, transports } from '../../utils/data'
import { ERRORS, CREATE_ORDER_STATUS } from '../../utils/dictionary'

const bultos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function CreateOrderForm({ user, createOrder, orderStatusCode }) {
  const [errorMessage, setErrorMessage] = useState()
  const [radioValue, setRadioValue] = useState('domicilio')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')

    const orderId = (user.orders.length + 1).toString()
    const data = {
      orderId,
      userId: user.id,
      name: e.target.name.value.toString().toUpperCase(),
      document: e.target.document.value.toString().toUpperCase(),
      cuit: e.target.cuit.value.toString().toUpperCase(),
      tel: e.target.tel.value.toString().toUpperCase(),
      email: e.target.email.value.toString().toUpperCase(),
      type: radioValue.toString().toUpperCase(),
      cp: e.target.cp.value.toString().toUpperCase(),
      province: e.target.province.value.toString().toUpperCase(),
      location: e.target.location.value.toString().toUpperCase(),
      street: e.target.street.value.toString().toUpperCase(),
      streetHeight: e.target.streetHeight.value.toString().toUpperCase(),
      flat: e.target.flat.value.toString().toUpperCase(),
      department: e.target.department.value.toString().toUpperCase(),
      specification: e.target.specification.value.toString().toUpperCase(),
      transport: e.target.transport.value.toString().toUpperCase(),
      amount: e.target.amount.value.toString().toUpperCase(),
      cant: e.target.cant.value.toString().toUpperCase(),
      weight: e.target.weight.value.toString().toUpperCase(),
      description: e.target.description.value.toString().toUpperCase(),
    }

    try {
      await createOrder(data)
      e.target.reset()
    } catch (e) {
      console.log({ e })
      setErrorMessage(e.message)
    }
  }
  return (
    <form className={styles.form} onReset={() => console.log('resewteado')} onSubmit={handleSubmit}>
      <h3 className={styles.h3}>Datos del Cliente:</h3>
      <div className={styles.div}>
        <div className={styles.inputsContainer}>
          <Input
            type="text"
            id="name"
            name="name"
            label="Nombre y Apellido *"
            value=""
            error={errorMessage === ERRORS.NAME_REQUIRED && ERRORS.NAME_REQUIRED}
            onChange={() => setErrorMessage('')}
          />
          <Input
            type="number"
            id="document"
            name="document"
            label="Documento *"
            info="Documento sin puntos, barras ni comas."
            error={errorMessage === ERRORS.DOCUMENT_REQUIRED && ERRORS.DOCUMENT_REQUIRED}
            onChange={() => setErrorMessage('')}
          />
        </div>
        <div className={styles.inputsContainer}>
          <Input
            type="number"
            id="cuit"
            name="cuit"
            label="CUIT"
            info="CUIT sin puntos, barras ni comas."
            /* error={errorMessage === ERRORS.NAME_REQUIRED && ERRORS.NAME_REQUIRED} */
            onChange={() => setErrorMessage('')}
          />
          <Input
            type="tel"
            id="tel"
            name="tel"
            label="Telefono *"
            info="Código de área + Nº. Ejemplo: 1123456789."
            error={errorMessage === ERRORS.TEL_REQUIRED && ERRORS.TEL_REQUIRED}
            onChange={() => setErrorMessage('')}
          />
          <Input
            type="email"
            id="email"
            name="email"
            label="Email *"
            info="Email para informar al cliente sobre la evolución de su envio."
            error={errorMessage === ERRORS.EMAIL_REQUIRED && ERRORS.EMAIL_REQUIRED}
            onChange={() => setErrorMessage('')}
          />
        </div>
      </div>
      <h3 className={styles.h3}>Datos de Envio:</h3>
      <div className={styles.div}>
        <label>¿Donde quieres enviar el pedido? *</label>
        <div className={styles.inputBoxContainer} id="type">
          <label htmlFor="domicilio">Domicilio</label>
          <Input
            type="radio"
            id="domicilio"
            name="type"
            value="domicilio"
            onChange={(e) => {
              setRadioValue(e.target.id)
              setErrorMessage('')
            }}
            checked
          />
          <label htmlFor="sucursal">Sucursal</label>
          <Input
            type="radio"
            id="sucursal"
            name="type"
            value="sucursal"
            onChange={(e) => {
              setRadioValue(e.target.id)
              setErrorMessage('')
            }}
          />
        </div>
      </div>
      <div className={styles.div}>
        <div className={styles.inputsContainer}>
          <Input
            type="number"
            id="cp"
            name="cp"
            label="Codigo Postal *"
            info={
              <a className={styles.aSearchCP} href="https://codigopostal.com.ar/" target="_blank" rel="noreferrer">
                (+) BUSCAR CODIGO POSTAL
              </a>
            }
            error={errorMessage === ERRORS.CP_REQUIRED && ERRORS.CP_REQUIRED}
            onChange={() => setErrorMessage('')}
          />
          <Input
            type="select"
            id="province"
            name="province"
            options={provinces}
            label="Provincia *"
            error={errorMessage === ERRORS.PROVINCE_REQUIRED && ERRORS.PROVINCE_REQUIRED}
            onChange={() => setErrorMessage('')}
          />
          <Input
            label="Localidad *"
            id="location"
            name="location"
            error={errorMessage === ERRORS.LOCATION_REQUIRED && ERRORS.LOCATION_REQUIRED}
            onChange={() => setErrorMessage('')}
          />
        </div>
        <div className={styles.inputsContainer}>
          <Input
            type="text"
            id="street"
            name="street"
            label="Nombre de la calle *"
            error={errorMessage === ERRORS.STREET_REQUIRED && ERRORS.STREET_REQUIRED}
            onChange={() => setErrorMessage('')}
          />
          <Input
            type="text"
            id="streetHeight"
            name="streetHeight"
            label="Altura *"
            error={errorMessage === ERRORS.STREET_HEIGHT_REQUIRED && ERRORS.STREET_HEIGHT_REQUIRED}
            onChange={() => setErrorMessage('')}
          />
          <Input type="text" id="flat" name="flat" label="Piso" onChange={() => setErrorMessage('')} />
          <Input type="text" id="department" name="department" label="Departamento" onChange={() => setErrorMessage('')} />
        </div>
        <div className={styles.inputsContainer}>
          <Input
            type="text"
            id="specification"
            name="specification"
            label="Especificacion de la direccion"
            info="Información adicional como bloque, torre, local, galeria, entre calles, etc."
            onChange={() => setErrorMessage('')}
          />
          <Input
            type="select"
            id="transport"
            name="transport"
            options={transports}
            label="Seleccione el tipo de transporte *"
            error={errorMessage === ERRORS.TRANSPORT_REQUIRED && ERRORS.TRANSPORT_REQUIRED}
            onChange={() => setErrorMessage('')}
          />
        </div>
      </div>
      <h3 className={styles.h3}>Datos de Pedido:</h3>
      <div className={styles.div}>
        <div className={styles.inputsContainer}>
          <Input
            type="number"
            id="amount"
            name="amount"
            label="Valor declarado *"
            info="Valor del pedido en pesos."
            error={errorMessage === ERRORS.AMOUNT_REQUIRED && ERRORS.AMOUNT_REQUIRED}
            onChange={() => setErrorMessage('')}
          />
          <Input
            type="select"
            options={bultos}
            id="cant"
            name="cant"
            label="Cantidad de bultos"
            info="Los bultos deben tener tamaños similares."
            onChange={() => setErrorMessage('')}
          />
          <Input
            type="number"
            id="weight"
            name="weight"
            label="Peso total (Kg)"
            info="Peso Total de Todos los bultos."
            onChange={() => setErrorMessage('')}
          />
        </div>
        <div className={styles.inputsContainer}>
          <Input type="text" id="description" name="description" label="Descripcion" onChange={() => setErrorMessage('')} />
        </div>
      </div>
      <Button className={'formButton'} width={'130px'} disabled={orderStatusCode === CREATE_ORDER_STATUS.LOADING}>
        CREAR PEDIDO
      </Button>
    </form>
  )
}
