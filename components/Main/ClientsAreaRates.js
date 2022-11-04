import styles from '../../styles/AreaClientsMain.module.css'
import Image from 'next/image'
import Button from '../Button'
import CircleCheckIcon from '../Icons/CircleCheckIcon'

export default function ClientsAreaRates() {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>Tarifas y Pagos</h2>
        <div className={styles.boxSpaceBetween}>
          <h3>SALDO ACTUAL</h3>
          <h3 className={styles.saldoActual}>$25.000</h3>
        </div>
        <p className={styles.warning}>Al costo de envio se le sumara el 1% del valor declarado y $70 adicionales por paquete con motivo de tarifa de servicio.</p>
        <div className={styles.boxes}>
          <div className={`${styles.tarifaBox} ${styles.tarifaBoxCorreoArgentino}`}>
          <div className={styles.expressBox}>
          <Image src="/logocorreoargentino.png" alt="Correo Argentino" width='140' height='40' />
            </div>
            <div className={styles.precioTarifa}><div><span><strong>$</strong>820</span>Sucursal</div><div><span><strong>$</strong>1250</span>Domicilio</div></div>
            <ul>
            <li><CircleCheckIcon className={styles.checkIcon} /> Elige este</li>
            <li><CircleCheckIcon className={styles.checkIcon} /> Es genial</li>
            <li><CircleCheckIcon className={styles.checkIcon} /> Todo llega ulde rapido</li>
            <li><CircleCheckIcon className={styles.checkIcon} /> Elige este</li>
            <li><CircleCheckIcon className={styles.checkIcon} /> Es genial</li>
            <li><CircleCheckIcon className={styles.checkIcon} /> Todo llega ulde rapido</li>
          </ul>
          <Button>Crear Pedido</Button>
          </div>
          <div className={`${styles.tarifaBox} ${styles.tarifaBoxPromail}`}>
          <div className={styles.expressBox}>
          <Image src="/ProMail.Web_.Logo_.png" alt="Promail" width='180' height='35' />
            </div>
            <div className={styles.precioTarifa}><div><span><strong>$</strong>550</span>CABA</div><div><span><strong>$</strong>650</span>GBA</div></div>
            <ul>
            <li><CircleCheckIcon className={styles.checkIcon} /> Elige este</li>
            <li><CircleCheckIcon className={styles.checkIcon} /> Es genial</li>
            <li><CircleCheckIcon className={styles.checkIcon} /> Todo llega ulde rapido</li>
            <li><CircleCheckIcon className={styles.checkIcon} /> Elige este</li>
            <li><CircleCheckIcon className={styles.checkIcon} /> Es genial</li>
            <li><CircleCheckIcon className={styles.checkIcon} /> Todo llega ulde rapido</li>
          </ul>
          <Button href="/clients-area/create-order">Crear Pedido</Button>
          </div>
          <div className={`${styles.tarifaBox} ${styles.tarifaBoxCruzDelSur}`}>
            <div className={styles.expressBox}>
              <Image src="/logocruzdelsur.jpg" alt="Cruz del Sur" width='180' height='35' />
            </div>
          <div className={styles.precioTarifa}><div><span><strong>$</strong>990</span>Domicilio</div></div>
          <ul>
            <li><CircleCheckIcon className={styles.checkIcon} /> Elige este</li>
            <li><CircleCheckIcon className={styles.checkIcon} /> Es genial</li>
            <li><CircleCheckIcon className={styles.checkIcon} /> Todo llega ulde rapido</li>
            <li><CircleCheckIcon className={styles.checkIcon} /> Elige este</li>
            <li><CircleCheckIcon className={styles.checkIcon} /> Es genial</li>
            <li><CircleCheckIcon className={styles.checkIcon} /> Todo llega ulde rapido</li>
          </ul>
          <Button>Crear Pedido</Button>
          </div>
        </div>
        <small className={styles.warning}>
          *Los tiempos de entrega estimados se cuentan desde que se despacha el pedido al servicio de envío.
        </small>
      </div>
    </section>
  )
}
