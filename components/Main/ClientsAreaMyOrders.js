import styles from '../../styles/AreaClientsMain.module.css'

export default function ClientsAreaMyOrdersMain() {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>Pedidos</h2>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
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
            <tr className={styles.tr}>
              <td className={styles.td}>123456789</td>
              <td className={styles.td}>IAN ROSALES</td>
              <td className={styles.td}>96083523</td>
              <td className={styles.td}>BARRACAS</td>
              <td className={styles.td}>CABA</td>
              <td className={styles.td}>1712</td>
              <td className={styles.td}>DOMICILIO</td>
              <td className={styles.td}>CORREO ARGENTINO</td>
              <td className={styles.td}>3215ASD15JAH13F5AH5DF</td>
              <td className={styles.td}>ENVIADO</td>
              <td className={styles.td}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
