import Link from 'next/link'
import Input from '../Input'
import Button from '../Button'
import styles from '../../styles/Form.module.css'

export default function CreateOrderForm() {
  return (
    <form className={styles.form}>
       <h3>Datos del Cliente:</h3>
       <div className={styles.div}>
       <div className={styles.inputContainer}>
          <Input type="text" id="name" name="name" label="Nombre y Apellido *" placeholder="Nombre completo" required/>
          <Input type="number" id="document" name="document" label="Documento *" placeholder="Documento sin puntos, barras ni comas" required/>
       </div>
       <div className={styles.inputContainer}>
          <Input type="number" id="cuit" name="cuit" label='CUIT' placeholder="CUIT sin puntos, barras ni comas"/>
          <Input type="tel" id="phone" name="phone" label="Telefono *" placeholder="Código de área + Nº. Ejemplo: 1123456789" required/>
          <Input type="email" id="email" name="email" label="Email *" placeholder="Ejemplo@gmail.com *" info="Email para informar al cliente sobre la evolución de su envio." required/>
       </div>
       </div>
       <h3>Datos de Envio:</h3>
       <div className={styles.div}>
          <label>¿Donde quieres enviar el pedido? *</label>
          <div className={styles.inputRadioContainer}>
              <Input type="radio" id="domicilio" name="tipo-de-envio" label="Domicilio" value="domicilio"/>
              <Input type="radio" id="sucursal" name="tipo-de-envio" label="Sucursal" value="sucursal" />
          </div>
       </div>
       <div className={styles.div}>
          <div className={styles.inputContainer}>
              <Input type="number" id="cp" name="cp" label='Codigo Postal *' info={<a className={styles.aSearchCP} href="https://codigopostal.com.ar/" target='_blank' rel='noreferrer'>(+) BUSCAR CODIGO POSTAL</a>} placeholder='1272' required />
              <Input label='Provincia *' />
              <Input label='Localidad *' />
          </div>
          <div className={styles.inputContainer}>
              <Input label='Nombre de la calle *' />
              <Input label='Altura *' />
              <Input label='Piso' />
              <Input label='Departamento' />
          </div>
          <div className={styles.inputContainer}>
              <Input label='Espeficicacion de la direccion' />
              <Input label='Seleccione el tipo de transporte *' />
          </div>
          <div className={styles.inputContainer}>
              <Input label='Nombre del expreso *' />
          </div>
       </div>
       <h3>Datos de Pedido:</h3>
       <div className={styles.div}>
          <div className={styles.inputContainer}>
              <Input label='Valor declarado *' />
              <Input label='Cantidad de bultos' />
              <Input label='Peso total (Kg)' />
          </div>
          <div className={styles.inputContainer}>
              <Input label='Ancho, Alto, Profundidad (cm)' />
              <Input label='Descripcion' />
          </div>
       </div>
       <Button>CREAR PEDIDO</Button>
    </form>
  )
}

/**
 * <h2 class="sub-title">Nuevo Pedido</h2>
    <div class="content-item content-item-crear-pedido">
        <form action="">
            <h2>Datos del Cliente:</h2>
            <div class="content-form">
                <div class="content-form-input">
                    <label for="name">Nombre y Apellido *</label><br>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="content-form-input">
                    <label for="document">Documento *</label><br>
                    <input type="number" id="document" name="document" required>
                </div>
                <div class="content-form-input">
                    <label for="cuit">CUIT</label><br>
                    <input type="number" id="cuit" name="cuit">
                </div>
                <div class="content-form-input">
                    <label for="email">Email</label><br>
                    <input type="email" id="email" name="email">
                    <p>Mail para informar al cliente sobre la evolución del pedido</p>
                </div>
                <div class="content-form-input">
                    <label for="phone">Telefono *</label><br>
                    <input type="tel" id="phone" name="phone" required>
                    <p>Código de área + Nº. Ejemplo: 1123456789</p>
                </div>
            </div>
            <h2>Datos de Envio:</h2>
            <div class="label-tipo-de-envio">
                <label>¿Donde quieres enviar el pedido?</label><br>
                <div class="input-tipo-de-envio">
                    <input type="radio" id="domicilio" name="tipo-de-envio" value="domicilio">
                    <label for="domicilio">Domicilio</label>
                    <input type="radio" id="sucursal" name="tipo-de-envio" value="sucursal">
                    <label for="sucursal">Sucursal</label>
                </div>
            </div>
            <div class="content-form">
                <div class="content-form-input">
                    <label for="cp">Codigo Postal *</label><br>
                    <input type="number" id="cp" name="cp" required>
                </div>
                <div class="content-form-input">
                    <a href="https://codigopostal.com.ar/" target="_blank"><div>(+) BUSCAR CODIGO POSTAL</div></a>
                </div>
                <div class="content-form-input content-form-input-1 content-form-input-select">
                    <label for="provincia">Provincia *</label><br>
                    <select id="provincia" name="provincia" required>
                        <option style="display: none;" selected></option>
                        <option value="CABA">CABA -  Buenos Aires</option>
                        <option value="GBA">GBA - Gran Buenos Aires</option>
                        <option value="Buenos Aires">Provincia de Buenos Aires</option>
                        <option value="Catamarca">Catamarca</option>
                        <option value="Chaco">Chaco</option>
                        <option value="Chubut">Chubut</option>
                        <option value="Córdoba">Córdoba</option>
                        <option value="Corrientes">Corrientes</option>
                        <option value="Entre Ríos">Entre Ríos</option>
                        <option value="Formosa">Formosa</option>
                        <option value="Jujuy">Jujuy</option>
                        <option value="La Pampa">La Pampa</option>
                        <option value="La Rioja">La Rioja</option>
                        <option value="Mendoza">Mendoza</option>
                        <option value="Misiones">Misiones</option>
                        <option value="Neuquén">Neuquén</option>
                        <option value="Río Negro">Río Negro</option>
                        <option value="Salta">Salta</option>
                        <option value="San Juan">San Juan</option>
                        <option value="San Luis">San Luis</option>
                        <option value="Santa Cruz">Santa Cruz</option>
                        <option value="Santa Fe">Santa Fe</option>
                        <option value="Santiago del Estero">Santiago del Estero</option>
                        <option value="Tierra del Fuego">Tierra del Fuego</option>
                        <option value="Tucumán">Tucumán</option>
                    </select>
                </div>
                <div class="content-form-input content-form-input-1">
                    <label for="localidad">Localidad *</label><br>
                    <input type="text" id="localidad" name="localidad" required>
                </div>
                <div class="content-form-input content-form-input-1">
                    <label for="calle">Nombre de la calle *</label><br>
                    <input type="text" id="calle" name="calle" required>
                </div>
                <div class="content-form-input content-form-input-1">
                    <label for="altura">Altura *</label><br>
                    <input type="number" id="altura" name="altura" required>
                </div>
                <div class="content-form-input content-form-input-1">
                    <label for="piso">Piso</label><br>
                    <input type="text" id="piso" name="piso">
                </div>
                <div class="content-form-input content-form-input-1">
                    <label for="depto">Departamento</label><br>
                    <input type="text" id="depto" name="depto">
                </div>
                <div class="content-form-input content-form-input-1">
                    <label for="especificacion">Espeficicacion de la direccion</label><br>
                    <input type="text" id="especificacion" name="especificacion">
                    <p>Información adicional como bloque, torre, local, galeria, entre calles, etc.</p>
                </div>
                <div class="content-form-input content-form-input-1 content-form-input-select">
                    <label for="transporte">Seleccione el tipo de transporte *</label><br>
                    <select id="transporte" name="transporte" required>
                        <option style="display: none;" selected></option>
                        <option value="Correo Argentino">Correo Argentino</option>
                        <option value="OCA">OCA</option>
                        <option value="Chazki">Chazki</option>
                        <option value="Via Cargo">Via Cargo</option>
                        <option value="Otros Expresos">Otros Expresos</option>
                    </select>
                </div>
                <div class="content-form-input content-form-input-1 content-form-input-expreso">
                    <label for="expreso">Nombre del expreso *</label><br>
                    <input type="text" id="expreso" name="expreso">
                </div>
            </div>
            <h2>Datos del Pedido:</h2>
            <div class="content-form">
                <div class="content-form-input">
                    <label for="valor">Valor declarado *</label><br>
                    <input type="number" id="valor" name="valor" required>
                </div>
                <div class="content-form-input content-form-input-bultos">
                    <label for="bultos">Cantidad de bultos</label><br>
                    <select id="bultos" name="bultos">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="5">6</option>
                        <option value="5">7</option>
                        <option value="5">8</option>
                        <option value="5">9</option>
                        <option value="5">10</option>
                    </select>
                </div>
                <div class="content-form-input">
                    <label for="peso">Peso total (Kg)</label><br>
                    <input type="text" id="peso" name="peso" max="15">
                </div>
                <div class="content-form-input content-form-input">
                    <label for="dimensiones">Ancho, Alto, Profundidad (cm)</label><br>
                    <input type="text" id="dimensiones" name="dimensiones">
                </div>
            </div>
            <div class="content-form">
                <div class="content-form-input content-form-input-1">
                    <label for="descripcion">Descripcion</label><br>
                    <textarea type="text-area" id="descripcion" name="descripcion"></textarea>
                </div>
            </div>
            <div class="btn-container"><button class="btn" type="submit">GENERAR</button></div>
        </form>
    </div>
 */
