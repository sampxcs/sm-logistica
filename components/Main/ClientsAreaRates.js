import styles from '../../styles/AreaClientsMain.module.css'

export default function ClientsAreaRates() {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>Membresia y Pagos</h2>
        <h3>ESTADO DE CUENTA</h3>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th className={styles.th}></th>
              <th className={styles.th}></th>
              <th className={styles.th}></th>
              <th className={styles.th}></th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            <tr className={styles.tr}>
              <td className={styles.td}></td>
              <td className={styles.td}></td>
              <td className={styles.td}></td>
              <td className={styles.td}></td>
            </tr>
          </tbody>
        </table>
        <h3>TARIFAS</h3>
        <p className={styles.warning}>A la tarifa de envio se le sumaran $70 por paquete con motivo de costo logistico.</p>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th className={styles.th}>Zona</th>
              <th className={styles.th}>Expreso</th>
              <th className={styles.th}>Tipo de Envio</th>
              <th className={styles.th}>Tiempo de Entrega (Estimado)</th>
              <th className={styles.th}>Costo de Envio</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            <tr className={styles.tr}>
              <td className={styles.td}>
                CABA <span className={styles.btnVerMapa}>Ver mapa</span>
              </td>
              <td className={styles.td}>Moto Express</td>
              <td className={styles.td}>Domicilio</td>
              <td className={styles.td}>
                Hasta 4 dias habiles <span className={styles.tarifaTiempoRapido}>RAPIDO</span>
              </td>
              <td className={styles.td}>$450</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                AMBA (GBA1, GBA2,GBA3) <span className={styles.btnVerMapa}>Ver mapa</span>
              </td>
              <td className={styles.td}>Moto Express</td>
              <td className={styles.td}>Domicilio</td>
              <td className={styles.td}>
                Hasta 4 dias habiles <span className={styles.tarifaTiempoRapido}>RAPIDO</span>
              </td>
              <td className={styles.td}>$550</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                Gran Buenos Aires <span className={styles.btnVerMapa}>Ver mapa</span>
              </td>
              <td className={styles.td}>Expreso Tarifa Plana</td>
              <td className={styles.td}>Domicilio</td>
              <td className={styles.td}>
                Hasta 2 dias habiles <span className={styles.tarifaTiempoRapido}>RAPIDO</span>
              </td>
              <td className={styles.td}>$950</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                Gran Buenos Aires <span className={styles.btnVerMapa}>Ver mapa</span>
              </td>
              <td className={styles.td}>Via Cargo</td>
              <td className={styles.td}>Sucursal</td>
              <td className={styles.td}>
                Hasta 2 dias habiles <span className={styles.tarifaTiempoRapido}>RAPIDO</span>
              </td>
              <td className={styles.td}>Pago en destino</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                Gran Buenos Aires <span className={styles.btnVerMapa}>Ver mapa</span>
              </td>
              <td className={styles.td}>Correo Argentino</td>
              <td className={styles.td}>Sucursal</td>
              <td className={styles.td}>
                Hasta 3 dias habiles <span className={styles.tarifaTiempoRapido}>RAPIDO</span>
              </td>
              <td className={styles.td}>$740</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                Gran Buenos Aires <span className={styles.btnVerMapa}>Ver mapa</span>
              </td>
              <td className={styles.td}>Correo Argentino</td>
              <td className={styles.td}>Domicilio</td>
              <td className={styles.td}>
                Hasta 3 dias habiles <span className={styles.tarifaTiempoRapido}>RAPIDO</span>
              </td>
              <td className={styles.td}>$1140</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                Gran Buenos Aires <span className={styles.btnVerMapa}>Ver mapa</span>
              </td>
              <td className={styles.td}>OCA</td>
              <td className={styles.td}>Sucursal</td>
              <td className={styles.td}>
                Hasta 5 dias habiles <span className={styles.tarifaTiempoNormal}>NORMAL</span>
              </td>
              <td className={styles.td}>Pago en destino</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                Gran Buenos Aires <span className={styles.btnVerMapa}>Ver mapa</span>
              </td>
              <td className={styles.td}>OCA</td>
              <td className={styles.td}>Domicilio</td>
              <td className={styles.td}>
                Hasta 5 dias habiles <span className={styles.tarifaTiempoNormal}>NORMAL</span>
              </td>
              <td className={styles.td}>Pago en destino</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                Gran Buenos Aires <span className={styles.btnVerMapa}>Ver mapa</span>
              </td>
              <td className={styles.td}>Otros Expresos</td>
              <td className={styles.td}>Sucursal</td>
              <td className={styles.td}>
                Hasta 2 dias habiles <span className={styles.tarifaTiempoRapido}>RAPIDO</span>
              </td>
              <td className={styles.td}>Pago en destino</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                Gran Buenos Aires <span className={styles.btnVerMapa}>Ver mapa</span>
              </td>
              <td className={styles.td}>Otros Expresos</td>
              <td className={styles.td}>Domicilio</td>
              <td className={styles.td}>
                Hasta 2 dias habiles <span className={styles.tarifaTiempoRapido}>RAPIDO</span>
              </td>
              <td className={styles.td}>Pago en destino</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                Interior del pais <span className={styles.btnVerMapa}>Ver mapa</span>
              </td>
              <td className={styles.td}>Expreso Tarifa Plana</td>
              <td className={styles.td}>Domicilio</td>
              <td className={styles.td}>
                Hasta 4 dias habiles <span className={styles.tarifaTiempoRapido}>RAPIDO</span>
              </td>
              <td className={styles.td}>$950</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                Interior del pais <span className={styles.btnVerMapa}>Ver mapa</span>
              </td>
              <td className={styles.td}>Via Cargo</td>
              <td className={styles.td}>Sucursal</td>
              <td className={styles.td}>
                Hasta 4 dias habiles <span className={styles.tarifaTiempoRapido}>RAPIDO</span>
              </td>
              <td className={styles.td}>Pago en destino</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                Interior del pais <span className={styles.btnVerMapa}>Ver mapa</span>
              </td>
              <td className={styles.td}>Correo Argentino</td>
              <td className={styles.td}>Sucursal</td>
              <td className={styles.td}>
                Hasta 6 dias habiles <span className={styles.tarifaTiempoNormal}>NORMAL</span>
              </td>
              <td className={styles.td}>$740</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                Interior del pais <span className={styles.btnVerMapa}>Ver mapa</span>
              </td>
              <td className={styles.td}>Correo Argentino</td>
              <td className={styles.td}>Domicilio</td>
              <td className={styles.td}>
                Hasta 6 dias habiles <span className={styles.tarifaTiempoNormal}>NORMAL</span>
              </td>
              <td className={styles.td}>$1140</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                Interior del pais <span className={styles.btnVerMapa}>Ver mapa</span>
              </td>
              <td className={styles.td}>OCA</td>
              <td className={styles.td}>Sucursal</td>
              <td className={styles.td}>
                Hasta 7 dias habiles <span className={styles.tarifaTiempoNormal}>NORMAL</span>
              </td>
              <td className={styles.td}>Pago en destino</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                Interior del pais <span className={styles.btnVerMapa}>Ver mapa</span>
              </td>
              <td className={styles.td}>OCA</td>
              <td className={styles.td}>Domicilio</td>
              <td className={styles.td}>
                Hasta 7 dias habiles <span className={styles.tarifaTiempoNormal}>NORMAL</span>
              </td>
              <td className={styles.td}>Pago en destino</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                Interior del pais <span className={styles.btnVerMapa}>Ver mapa</span>
              </td>
              <td className={styles.td}>Otros Expresos</td>
              <td className={styles.td}>Sucursal</td>
              <td className={styles.td}>
                Hasta 7 dias habiles <span className={styles.tarifaTiempoNormal}>NORMAL</span>
              </td>
              <td className={styles.td}>Pago en destino</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                Interior del pais <span className={styles.btnVerMapa}>Ver mapa</span>
              </td>
              <td className={styles.td}>Otros Expresos</td>
              <td className={styles.td}>Domicilio</td>
              <td className={styles.td}>
                Hasta 7 dias habiles <span className={styles.tarifaTiempoNormal}>NORMAL</span>
              </td>
              <td className={styles.td}>Pago en destino</td>
            </tr>
          </tbody>
        </table>
        <small className={styles.warning}>
          *Los tiempos de entrega estimados se cuentan desde que se despacha el pedido al servicio de envío.
        </small>
      </div>
    </section>
  )
}
