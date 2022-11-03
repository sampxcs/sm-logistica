import styles from '../../styles/AreaClientsMain.module.css'

const pedidos = [
  {
    usuario: 'GABRIEL RUEJAS',
    nroPedido: '123456789',
    nombre: 'IAN ROSALES',
    dni: '96083523',
    localidad: 'BARRACAS',
    provincia: 'CABA',
    cp: '1272',
    tipoDeEnvio: 'DOMICILIO',
    transporte: 'CORREO ARGENTINO',
    nroGuia: 'ASD2165SDF153ADS654HJ',
    estado: 'ENVIADO',
  },
  {
    usuario: 'GABRIEL RUEJAS',
    nroPedido: '322165487',
    nombre: 'NILKARBIS QUIROZ',
    dni: '96092355',
    localidad: 'FLORES',
    provincia: 'CABA',
    cp: '6712',
    tipoDeEnvio: 'SUCURSAL',
    transporte: 'MOTO EXPRESS',
    nroGuia: '-',
    estado: 'EN DEPOSITO',
  },
  {
    usuario: 'IAN ROSALES',
    nroPedido: '123564987',
    nombre: 'JUAN CARLOS',
    dni: '96123654',
    localidad: 'TIGRE',
    provincia: 'BUENOS AIRES',
    cp: '7615',
    tipoDeEnvio: 'DOMICILIO',
    transporte: 'OCA',
    nroGuia: '000011235656848',
    estado: 'ENVIADO',
  },
  {
    usuario: 'GABRIEL RUEJAS',
    nroPedido: '123456789',
    nombre: 'IAN ROSALES',
    dni: '96083523',
    localidad: 'BARRACAS',
    provincia: 'CABA',
    cp: '1272',
    tipoDeEnvio: 'DOMICILIO',
    transporte: 'CORREO ARGENTINO',
    nroGuia: 'ASD2165SDF153ADS654HJ',
    estado: 'ENVIADO',
  },
  {
    usuario: 'GABRIEL RUEJAS',
    nroPedido: '322165487',
    nombre: 'NILKARBIS QUIROZ',
    dni: '96092355',
    localidad: 'FLORES',
    provincia: 'CABA',
    cp: '6712',
    tipoDeEnvio: 'SUCURSAL',
    transporte: 'MOTO EXPRESS',
    nroGuia: '-',
    estado: 'EN DEPOSITO',
  },
  {
    usuario: 'IAN ROSALES',
    nroPedido: '123564987',
    nombre: 'JUAN CARLOS',
    dni: '96123654',
    localidad: 'TIGRE',
    provincia: 'BUENOS AIRES',
    cp: '7615',
    tipoDeEnvio: 'DOMICILIO',
    transporte: 'OCA',
    nroGuia: '000011235656848',
    estado: 'ENVIADO',
  },
  {
    usuario: 'GABRIEL RUEJAS',
    nroPedido: '123456789',
    nombre: 'IAN ROSALES',
    dni: '96083523',
    localidad: 'BARRACAS',
    provincia: 'CABA',
    cp: '1272',
    tipoDeEnvio: 'DOMICILIO',
    transporte: 'CORREO ARGENTINO',
    nroGuia: 'ASD2165SDF153ADS654HJ',
    estado: 'ENVIADO',
  },
  {
    usuario: 'GABRIEL RUEJAS',
    nroPedido: '322165487',
    nombre: 'NILKARBIS QUIROZ',
    dni: '96092355',
    localidad: 'FLORES',
    provincia: 'CABA',
    cp: '6712',
    tipoDeEnvio: 'SUCURSAL',
    transporte: 'MOTO EXPRESS',
    nroGuia: '-',
    estado: 'EN DEPOSITO',
  },
  {
    usuario: 'IAN ROSALES',
    nroPedido: '123564987',
    nombre: 'JUAN CARLOS',
    dni: '96123654',
    localidad: 'TIGRE',
    provincia: 'BUENOS AIRES',
    cp: '7615',
    tipoDeEnvio: 'DOMICILIO',
    transporte: 'OCA',
    nroGuia: '000011235656848',
    estado: 'ENVIADO',
  },
  {
    usuario: 'GABRIEL RUEJAS',
    nroPedido: '123456789',
    nombre: 'IAN ROSALES',
    dni: '96083523',
    localidad: 'BARRACAS',
    provincia: 'CABA',
    cp: '1272',
    tipoDeEnvio: 'DOMICILIO',
    transporte: 'CORREO ARGENTINO',
    nroGuia: 'ASD2165SDF153ADS654HJ',
    estado: 'ENVIADO',
  },
  {
    usuario: 'GABRIEL RUEJAS',
    nroPedido: '322165487',
    nombre: 'NILKARBIS QUIROZ',
    dni: '96092355',
    localidad: 'FLORES',
    provincia: 'CABA',
    cp: '6712',
    tipoDeEnvio: 'SUCURSAL',
    transporte: 'MOTO EXPRESS',
    nroGuia: '-',
    estado: 'EN DEPOSITO',
  },
  {
    usuario: 'IAN ROSALES',
    nroPedido: '123564987',
    nombre: 'JUAN CARLOS',
    dni: '96123654',
    localidad: 'TIGRE',
    provincia: 'BUENOS AIRES',
    cp: '7615',
    tipoDeEnvio: 'DOMICILIO',
    transporte: 'OCA',
    nroGuia: '000011235656848',
    estado: 'ENVIADO',
  },
  {
    usuario: 'GABRIEL RUEJAS',
    nroPedido: '123456789',
    nombre: 'IAN ROSALES',
    dni: '96083523',
    localidad: 'BARRACAS',
    provincia: 'CABA',
    cp: '1272',
    tipoDeEnvio: 'DOMICILIO',
    transporte: 'CORREO ARGENTINO',
    nroGuia: 'ASD2165SDF153ADS654HJ',
    estado: 'ENVIADO',
  },
  {
    usuario: 'GABRIEL RUEJAS',
    nroPedido: '322165487',
    nombre: 'NILKARBIS QUIROZ',
    dni: '96092355',
    localidad: 'FLORES',
    provincia: 'CABA',
    cp: '6712',
    tipoDeEnvio: 'SUCURSAL',
    transporte: 'MOTO EXPRESS',
    nroGuia: '-',
    estado: 'EN DEPOSITO',
  },
  {
    usuario: 'IAN ROSALES',
    nroPedido: '123564987',
    nombre: 'JUAN CARLOS',
    dni: '96123654',
    localidad: 'TIGRE',
    provincia: 'BUENOS AIRES',
    cp: '7615',
    tipoDeEnvio: 'DOMICILIO',
    transporte: 'OCA',
    nroGuia: '000011235656848',
    estado: 'ENVIADO',
  },
  {
    usuario: 'GABRIEL RUEJAS',
    nroPedido: '123456789',
    nombre: 'IAN ROSALES',
    dni: '96083523',
    localidad: 'BARRACAS',
    provincia: 'CABA',
    cp: '1272',
    tipoDeEnvio: 'DOMICILIO',
    transporte: 'CORREO ARGENTINO',
    nroGuia: 'ASD2165SDF153ADS654HJ',
    estado: 'ENVIADO',
  },
  {
    usuario: 'GABRIEL RUEJAS',
    nroPedido: '322165487',
    nombre: 'NILKARBIS QUIROZ',
    dni: '96092355',
    localidad: 'FLORES',
    provincia: 'CABA',
    cp: '6712',
    tipoDeEnvio: 'SUCURSAL',
    transporte: 'MOTO EXPRESS',
    nroGuia: '-',
    estado: 'EN DEPOSITO',
  },
  {
    usuario: 'IAN ROSALES',
    nroPedido: '123564987',
    nombre: 'JUAN CARLOS',
    dni: '96123654',
    localidad: 'TIGRE',
    provincia: 'BUENOS AIRES',
    cp: '7615',
    tipoDeEnvio: 'DOMICILIO',
    transporte: 'OCA',
    nroGuia: '000011235656848',
    estado: 'ENVIADO',
  },
  {
    usuario: 'GABRIEL RUEJAS',
    nroPedido: '123456789',
    nombre: 'IAN ROSALES',
    dni: '96083523',
    localidad: 'BARRACAS',
    provincia: 'CABA',
    cp: '1272',
    tipoDeEnvio: 'DOMICILIO',
    transporte: 'CORREO ARGENTINO',
    nroGuia: 'ASD2165SDF153ADS654HJ',
    estado: 'ENVIADO',
  },
  {
    usuario: 'GABRIEL RUEJAS',
    nroPedido: '322165487',
    nombre: 'NILKARBIS QUIROZ',
    dni: '96092355',
    localidad: 'FLORES',
    provincia: 'CABA',
    cp: '6712',
    tipoDeEnvio: 'SUCURSAL',
    transporte: 'MOTO EXPRESS',
    nroGuia: '-',
    estado: 'EN DEPOSITO',
  },
  {
    usuario: 'IAN ROSALES',
    nroPedido: '123564987',
    nombre: 'JUAN CARLOS',
    dni: '96123654',
    localidad: 'TIGRE',
    provincia: 'BUENOS AIRES',
    cp: '7615',
    tipoDeEnvio: 'DOMICILIO',
    transporte: 'OCA',
    nroGuia: '000011235656848',
    estado: 'ENVIADO',
  },
  {
    usuario: 'GABRIEL RUEJAS',
    nroPedido: '123456789',
    nombre: 'IAN ROSALES',
    dni: '96083523',
    localidad: 'BARRACAS',
    provincia: 'CABA',
    cp: '1272',
    tipoDeEnvio: 'DOMICILIO',
    transporte: 'CORREO ARGENTINO',
    nroGuia: 'ASD2165SDF153ADS654HJ',
    estado: 'ENVIADO',
  },
  {
    usuario: 'GABRIEL RUEJAS',
    nroPedido: '322165487',
    nombre: 'NILKARBIS QUIROZ',
    dni: '96092355',
    localidad: 'FLORES',
    provincia: 'CABA',
    cp: '6712',
    tipoDeEnvio: 'SUCURSAL',
    transporte: 'MOTO EXPRESS',
    nroGuia: '-',
    estado: 'EN DEPOSITO',
  },
  {
    usuario: 'IAN ROSALES',
    nroPedido: '123564987',
    nombre: 'JUAN CARLOS',
    dni: '96123654',
    localidad: 'TIGRE',
    provincia: 'BUENOS AIRES',
    cp: '7615',
    tipoDeEnvio: 'DOMICILIO',
    transporte: 'OCA',
    nroGuia: '000011235656848',
    estado: 'ENVIADO',
  },
]

export default function ClientsAreaMyOrdersMain() {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>Pedidos</h2>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th className={styles.th}>Usuario</th>
              <th className={styles.th}>Nro. pedido</th>
              <th className={styles.th}>Nombre</th>
              <th className={styles.th}>DNI</th>
              <th className={styles.th}>Localidad</th>
              <th className={styles.th}>Provincia</th>
              <th className={styles.th}>CP</th>
              <th className={styles.th}>Tipo de Envio</th>
              <th className={styles.th}>Transporte</th>
              <th className={styles.th}>Nro. guia</th>
              <th className={styles.th}>Estado</th>
              <th className={styles.th}>Opciones</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {pedidos.map(({ usuario, nroPedido, nombre, dni, localidad, provincia, cp, tipoDeEnvio, transporte, nroGuia, estado }) => {
              return (
                <tr className={styles.tr} key={nroPedido}>
                  <td className={styles.td}>{usuario}</td>
                  <td className={styles.td}>{nroPedido}</td>
                  <td className={styles.td}>{nombre}</td>
                  <td className={styles.td}>{dni}</td>
                  <td className={styles.td}>{localidad}</td>
                  <td className={styles.td}>{provincia}</td>
                  <td className={styles.td}>{cp}</td>
                  <td className={styles.td}>{tipoDeEnvio}</td>
                  <td className={styles.td}>{transporte}</td>
                  <td className={styles.td}>{nroGuia}</td>
                  <td className={styles.td}>{estado}</td>
                  <td className={styles.td}></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
