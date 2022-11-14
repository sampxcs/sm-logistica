import { useState } from 'react'
import styles from './Form.module.css'

import Input from '../Input'
import Button from '../Button'

import { provinces, transports } from '../../utils/data'

const bultos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function CreateOrderForm({ user, createOrder }) {
  const [error, setError] = useState()
  const [radioValue, setRadioValue] = useState('domicilio')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    console.log(user)

    const orderId = (user.orders.length + 1).toString()

    console.dir(e.target.type)

    const data = {
      orderId,
      userId: user.id,
      name: e.target.name.value,
      document: e.target.document.value,
      cuit: e.target.cuit.value,
      tel: e.target.tel.value,
      email: e.target.email.value,
      type: radioValue,
      cp: e.target.cp.value,
      province: e.target.province.value,
      location: e.target.location.value,
      street: e.target.street.value,
      streetHeight: e.target.streetHeight.value,
      flat: e.target.flat.value,
      department: e.target.department.value,
      specification: e.target.specification.value,
      transport: e.target.transport.value,
      transportName: e.target.transportName.value,
      amount: e.target.amount.value,
      cant: e.target.cant.value,
      weight: e.target.weight.value,
      description: e.target.description.value,
    }

    console.log(data)

    try {
      await createOrder(data)
    } catch (e) {
      console.log({ e })
      setError(e.message)
    }
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.h3}>Datos del Cliente:</h3>
      <div className={styles.div}>
        <div className={styles.inputsContainer}>
          <Input type='text' id='name' name='name' label='Nombre y Apellido *' />
          <Input type='number' id='document' name='document' label='Documento *' info='Documento sin puntos, barras ni comas.' />
        </div>
        <div className={styles.inputsContainer}>
          <Input type='number' id='cuit' name='cuit' label='CUIT' info='CUIT sin puntos, barras ni comas.' />
          <Input type='tel' id='tel' name='tel' label='Telefono *' info='Código de área + Nº. Ejemplo: 1123456789.' />
          <Input
            type='email'
            id='email'
            name='email'
            label='Email *'
            info='Email para informar al cliente sobre la evolución de su envio.'
          />
        </div>
      </div>
      <h3 className={styles.h3}>Datos de Envio:</h3>
      <div className={styles.div}>
        <label>¿Donde quieres enviar el pedido? *</label>
        <div className={styles.inputBoxContainer} id='type'>
          <label htmlFor='domicilio'>Domicilio</label>
          <Input type='radio' id='domicilio' name='type' value='domicilio' onChange={(e) => setRadioValue(e.target.id)} checked />
          <label htmlFor='sucursal'>Sucursal</label>
          <Input type='radio' id='sucursal' name='type' value='sucursal' onChange={(e) => setRadioValue(e.target.id)} />
        </div>
      </div>
      <div className={styles.div}>
        <div className={styles.inputsContainer}>
          <Input
            type='number'
            id='cp'
            name='cp'
            label='Codigo Postal *'
            info={
              <a className={styles.aSearchCP} href='https://codigopostal.com.ar/' target='_blank' rel='noreferrer'>
                (+) BUSCAR CODIGO POSTAL
              </a>
            }
          />
          <Input type='select' id='province' name='province' options={provinces} label='Provincia *' />
          <Input label='Localidad *' id='location' name='location' />
        </div>
        <div className={styles.inputsContainer}>
          <Input type='text' id='street' name='street' label='Nombre de la calle *' />
          <Input type='text' id='streetHeight' name='streetHeight' label='Altura *' />
          <Input type='text' id='flat' name='flat' label='Piso' />
          <Input type='text' id='department' name='department' label='Departamento' />
        </div>
        <div className={styles.inputsContainer}>
          <Input
            type='text'
            id='specification'
            name='specification'
            label='Especificacion de la direccion'
            info='Información adicional como bloque, torre, local, galeria, entre calles, etc.'
          />
          <Input type='select' id='transport' name='transport' options={transports} label='Seleccione el tipo de transporte *' />
        </div>
        <div className={styles.inputsContainer}>
          <Input type='text' id='transportName' name='transportName' label='Nombre del expreso *' />
        </div>
      </div>
      <h3 className={styles.h3}>Datos de Pedido:</h3>
      <div className={styles.div}>
        <div className={styles.inputsContainer}>
          <Input type='number' id='amount' name='amount' label='Valor declarado *' info='Valor del pedido en pesos.' />
          <Input
            type='select'
            options={bultos}
            id='cant'
            name='cant'
            label='Cantidad de bultos'
            info='Los bultos deben tener tamaños similares.'
          />
          <Input type='number' id='weight' name='weight' label='Peso total (Kg)' info='Peso Total de Todos los bultos.' />
        </div>
        <div className={styles.inputsContainer}>
          <Input type='text' id='description' name='description' label='Descripcion' />
        </div>
      </div>
      <Button className={'formButton'} width={'max-content'}>
        CREAR PEDIDO
      </Button>
    </form>
  )
}
