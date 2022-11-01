import styles from '../../styles/AreaClientsMain.module.css'
import Link from 'next/link'

export default function ClientsAreaImportOrdersMain() {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>Usuarios</h2>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th className={styles.th}>ID</th>
              <th className={styles.th}>Nombre</th>
              <th className={styles.th}>Pedidos Creados</th>
              <th className={styles.th}>Estado</th>
              <th className={styles.th}>Opciones</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            <tr className={styles.tr}>
              <td className={styles.td}>96083523</td>
              <td className={styles.td}>Ian Rosales</td>
              <td className={styles.td}>35</td>
              <td className={styles.td}>En Linea</td>
              <td className={styles.td}></td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>10835429</td>
              <td className={styles.td}>Gabriel Ruejas</td>
              <td className={styles.td}>29</td>
              <td className={styles.td}>En Linea</td>
              <td className={styles.td}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
