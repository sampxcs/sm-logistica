import Input from '../Input'
import Button from '../Button'
import styles from './Form.module.css'

export default function ImportOrdersForm() {
  return (
    <form className={styles.form}>
      <p className={styles.warning}>
        ATENCIÓN ! El siguiente proceso genera los despachos automaticamente. Por favor no utilizar para pruebas.
      </p>
      <p className={styles.p}>
        Puede descargar ejemplos de archivos AQUÍ. <br />
        Para importar archivo debe ser en formato de Excel, el orden no es obligatorio, pero si el nombre de las columnas. <br />
        Deben existir todos los campos, aunque pueden estar vacíos. <br />
        Para entender cada campo y si es obligatorio o no podés consultar el detalle de la Api Rest AQUÍ. <br />
        Si ya contás con un archivo con todos los datos obligatorios pero el formato no es igual a los ejemplos, no importa, nosotros
        podemos adaptarnos sin problemas. Consultanos a info@smlogistica.com. <br />
      </p>

      <h3 className={styles.h3}>CARGA DE ARCHIVO</h3>
      <Input
        id='import-order'
        type='file'
        label='Arrastra y suelta o has click aqui para seleccionar tu archivo'
        accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
        required
      />
      <Button className={'formButton'} width={'110px'}>
        IMPORTAR
      </Button>
    </form>
  )
}
