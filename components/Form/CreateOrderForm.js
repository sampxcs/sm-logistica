import Input from '../Input'
import Button from '../Button'
import styles from '../../styles/Form.module.css'

const provincias = [
  'CABA',
  'GBA',
  'Buenos Aires',
  'Catamarca',
  'Chaco',
  'Chubut',
  'Córdoba',
  'Corrientes',
  'Entre Ríos',
  'Formosa',
  'Jujuy',
  'La Pampa',
  'La Rioja',
  'Mendoza',
  'Misiones',
  'Neuquén',
  'Río Negro',
  'Salta',
  'San Juan',
  'San Luis',
  'Santa Cruz',
  'Santa Fe',
  'Santiago del Estero',
  'Tierra del Fuego',
  'Tucumán',
]
const expresos = ['Correo Argentino', 'OCA', 'Moto Express', 'Via Cargo', 'Expreso Tarifa Plana', 'Otros Expresos']
const bultos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function CreateOrderForm() {
  return (
    <form className={styles.form}>
      <h3 className={styles.h3}>Datos del Cliente:</h3>
      <div className={styles.div}>
        <div className={styles.inputsContainer}>
          <Input type="text" id="name" name="name" label="Nombre y Apellido *" required />
          <Input type="number" id="document" name="document" label="Documento *" info="Documento sin puntos, barras ni comas." required />
        </div>
        <div className={styles.inputsContainer}>
          <Input type="number" id="cuit" name="cuit" label="CUIT" info="CUIT sin puntos, barras ni comas." />
          <Input type="tel" id="phone" name="phone" label="Telefono *" info="Código de área + Nº. Ejemplo: 1123456789." required />
          <Input
            type="email"
            id="email"
            name="email"
            label="Email *"
            info="Email para informar al cliente sobre la evolución de su envio."
            required
          />
        </div>
      </div>
      <h3 className={styles.h3}>Datos de Envio:</h3>
      <div className={styles.div}>
        <label>¿Donde quieres enviar el pedido? *</label>
        <div className={styles.inputBoxContainer}>
          <label htmlFor="domicilio">Domicilio</label>
          <Input type="radio" id="domicilio" name="tipo-de-envio" value="domicilio" />
          <label htmlFor="sucursal">Sucursal</label>
          <Input type="radio" id="sucursal" name="tipo-de-envio" value="sucursal" />
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
            required
          />
          <Input type="select" options={provincias} label="Provincia *" required />
          <Input label="Localidad *" required />
        </div>
        <div className={styles.inputsContainer}>
          <Input type="text" id="calle" name="calle" label="Nombre de la calle *" required />
          <Input type="text" id="altura" name="altura" label="Altura *" required />
          <Input type="text" id="piso" name="piso" label="Piso" />
          <Input type="text" id="departamento" name="departamento" label="Departamento" />
        </div>
        <div className={styles.inputsContainer}>
          <Input
            type="text"
            id="especificacion"
            name="especificacion"
            label="Especificacion de la direccion"
            info="Información adicional como bloque, torre, local, galeria, entre calles, etc."
          />
          <Input type="select" options={expresos} label="Seleccione el tipo de transporte *" required />
        </div>
        <div className={styles.inputsContainer}>
          <Input type="text" id="expreso" name="expreso" label="Nombre del expreso *" required />
        </div>
      </div>
      <h3 className={styles.h3}>Datos de Pedido:</h3>
      <div className={styles.div}>
        <div className={styles.inputsContainer}>
          <Input type="number" id="valor" name="valor" label="Valor declarado *" info="Valor del pedido en pesos." required />
          <Input
            type="select"
            options={bultos}
            id="cant"
            name="cant"
            label="Cantidad de bultos"
            info="Los bultos deben tener tamaños similares."
          />
          <Input type="number" id="peso" name="peso" label="Peso total (Kg)" info="Peso Total de Todos los bultos." />
        </div>
        <div className={styles.inputsContainer}>
          <Input
            type="text"
            id="dimenciones"
            name="dimenciones"
            label="Ancho, Alto, Profundidad (cm)"
            info="Ancho, alto, profundidad promedio de un bulto."
          />
          <Input type="text" id="descripcion" name="descripcion" label="Descripcion" />
        </div>
      </div>
      <Button>CREAR PEDIDO</Button>
    </form>
  )
}
