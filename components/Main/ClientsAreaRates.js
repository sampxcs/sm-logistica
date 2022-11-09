import styles from '../../styles/Main.module.css'
import Image from 'next/image'
import CircleCheckIcon from '../Icons/CircleCheckIcon'
import Link from 'next/link'
import Footer from '../Footer'

export default function ClientsAreaRates() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h2 className={styles.title}>TARIFAS Y PAGOS</h2>
        <Link href="/clients-area/account">
          <div className={`${styles.boxSpaceBetween} ${styles.link}`}>
            <h3>SALDO ACTUAL</h3>
            <h3 className={styles.saldoActual}>$25.000</h3>
          </div>
        </Link>
        <p className={styles.warning}>
          * Al costo de envio se le sumara el 1% del valor declarado y $70 adicionales por paquete con motivo de tarifa de servicio. <br />
          <small>* Los tiempos de entrega son estimados estimados y se cuentan desde que se despacha el pedido al servicio de envío.</small>
          <br />
          <small>* Se cobraran $70 adicionales por cada 1kg excedente, hasta llegar al peso maximo de 25kg.</small>
        </p>
        <div className={styles.boxes}>
          <div className={`${styles.tarifaBox} ${styles.tarifaBoxCorreoArgentino}`}>
            <a href="https://www.correoargentino.com.ar/" target="_blank" rel="noreferrer" className={styles.expressBox}>
              <Image src="/logocorreoargentino.png" alt="Correo Argentino" width="140" height="40" />
            </a>
            <div className={styles.precioTarifa}>
              <div>
                <span>
                  <strong>$</strong>820
                </span>
                Sucursal
              </div>
              <div>
                <span>
                  <strong>$</strong>1250
                </span>
                Domicilio
              </div>
            </div>
            <ul>
              <li>
                <CircleCheckIcon className={styles.checkIcon} /> Envios a todo el pais.
              </li>
              <li>
                <CircleCheckIcon className={styles.checkIcon} /> Tiempo de entrega de 3 a 6 dias.
              </li>
              <li>
                <CircleCheckIcon className={styles.checkIcon} /> Hasta 20kg.
              </li>
              <li>
                <CircleCheckIcon className={styles.checkIcon} /> Atención personalizada.
              </li>
              <li>
                <CircleCheckIcon className={styles.checkIcon} /> Seguimiento de envios.
              </li>
              <li>
                <CircleCheckIcon className={styles.checkIcon} /> Actualizaciones de estado.
              </li>
            </ul>
            <Link href="/clients-area/create-order">
              <button>Crear Pedido</button>
            </Link>
          </div>
          <div className={`${styles.tarifaBox} ${styles.tarifaBoxPromail}`}>
            <a href="http://promailcorreo.com.ar/" target="_blank" rel="noreferrer" className={styles.expressBox}>
              <h2 className={styles.promailLogo}>
                <span>PRO</span>mail
              </h2>
            </a>
            <div className={styles.precioTarifa}>
              <div>
                <span>
                  <strong>$</strong>550
                </span>
                CABA
              </div>
              <div>
                <span>
                  <strong>$</strong>650
                </span>
                GBA
              </div>
            </div>
            <ul>
              <li>
                <CircleCheckIcon className={styles.checkIcon} /> Envio a CABA y GBA (ver mapa).
              </li>
              <li>
                <CircleCheckIcon className={styles.checkIcon} /> Tiempo de entrega de hasta 4 dias.
              </li>
              <li>
                <CircleCheckIcon className={styles.checkIcon} /> Hasta 20kg.
              </li>
              <li>
                <CircleCheckIcon className={styles.checkIcon} /> Atención personalizada.
              </li>
              <li>
                <CircleCheckIcon className={styles.checkIcon} /> Seguimiento de envios.
              </li>
              <li>
                <CircleCheckIcon className={styles.checkIcon} /> Actualizaciones de estado.
              </li>
              <li>
                <CircleCheckIcon className={styles.checkIcon} /> Notificaciones de entrega.
              </li>
            </ul>
            <Link href="/clients-area/create-order">
              <button>Crear Pedido</button>
            </Link>
          </div>
          <div className={`${styles.tarifaBox} ${styles.tarifaBoxCruzDelSur}`}>
            <a href="https://www.cruzdelsur.com/" target="_blank" rel="noreferrer" className={styles.expressBox}>
              <Image src="/logocruzdelsur.png" alt="Cruz del Sur" width="200" height="35" />
            </a>
            <div className={styles.precioTarifa}>
              <div>
                <span>
                  <strong>$</strong>990
                </span>
                Domicilio
              </div>
            </div>
            <ul>
              <li>
                <CircleCheckIcon className={styles.checkIcon} /> Envios a todo el pais.
              </li>
              <li>
                <CircleCheckIcon className={styles.checkIcon} /> Tiempo de entrega de 2 a 6 dias.
              </li>
              <li>
                <CircleCheckIcon className={styles.checkIcon} /> Hasta 20kg.
              </li>
              <li>
                <CircleCheckIcon className={styles.checkIcon} /> Atención personalizada.
              </li>
              <li>
                <CircleCheckIcon className={styles.checkIcon} /> Seguimiento de envios.
              </li>
              <li>
                <CircleCheckIcon className={styles.checkIcon} /> Actualizaciones de estado.
              </li>
              <li>
                <CircleCheckIcon className={styles.checkIcon} /> Notificaciones de entrega.
              </li>
            </ul>
            <Link href="/clients-area/create-order">
              <button>Crear Pedido</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
