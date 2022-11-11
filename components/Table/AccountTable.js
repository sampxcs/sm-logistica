import styles from './Table.module.css'
import DataTable, { createTheme } from 'react-data-table-component'

const data = [
  {
    operacion: 'CREDITO',
    importe: '$11.230',
    ordenId: '-',
    referenciaDePago: '-',
    descipcion: 'PAGO REALIZADO EN EFECTIVO',
    fecha: '19/7/2021 19:24 hs',
    balance: '$13.770',
  },
  {
    operacion: 'CREDITO',
    importe: '$13.770',
    ordenId: '-',
    referenciaDePago: '-',
    descipcion: 'PAGO REALIZADO EN EFECTIVO',
    fecha: '29/6/2021 10:52 hs',
    balance: '$0',
  },
  {
    operacion: 'CREDITO',
    importe: '$11.230',
    ordenId: '-',
    referenciaDePago: '-',
    descipcion: 'PAGO REALIZADO EN EFECTIVO',
    fecha: '19/7/2021 19:24 hs',
    balance: '$13.770',
  },
  {
    operacion: 'CREDITO',
    importe: '$13.770',
    ordenId: '-',
    referenciaDePago: '-',
    descipcion: 'PAGO REALIZADO EN EFECTIVO',
    fecha: '29/6/2021 10:52 hs',
    balance: '$0',
  },
  {
    operacion: 'CREDITO',
    importe: '$11.230',
    ordenId: '-',
    referenciaDePago: '-',
    descipcion: 'PAGO REALIZADO EN EFECTIVO',
    fecha: '19/7/2021 19:24 hs',
    balance: '$13.770',
  },
  {
    operacion: 'CREDITO',
    importe: '$13.770',
    ordenId: '-',
    referenciaDePago: '-',
    descipcion: 'PAGO REALIZADO EN EFECTIVO',
    fecha: '29/6/2021 10:52 hs',
    balance: '$0',
  },
  {
    operacion: 'CREDITO',
    importe: '$11.230',
    ordenId: '-',
    referenciaDePago: '-',
    descipcion: 'PAGO REALIZADO EN EFECTIVO',
    fecha: '19/7/2021 19:24 hs',
    balance: '$13.770',
  },
  {
    operacion: 'CREDITO',
    importe: '$13.770',
    ordenId: '-',
    referenciaDePago: '-',
    descipcion: 'PAGO REALIZADO EN EFECTIVO',
    fecha: '29/6/2021 10:52 hs',
    balance: '$0',
  },
  {
    operacion: 'CREDITO',
    importe: '$11.230',
    ordenId: '-',
    referenciaDePago: '-',
    descipcion: 'PAGO REALIZADO EN EFECTIVO',
    fecha: '19/7/2021 19:24 hs',
    balance: '$13.770',
  },
  {
    operacion: 'CREDITO',
    importe: '$13.770',
    ordenId: '-',
    referenciaDePago: '-',
    descipcion: 'PAGO REALIZADO EN EFECTIVO',
    fecha: '29/6/2021 10:52 hs',
    balance: '$0',
  },
  {
    operacion: 'CREDITO',
    importe: '$13.770',
    ordenId: '-',
    referenciaDePago: '-',
    descipcion: 'PAGO REALIZADO EN EFECTIVO',
    fecha: '29/6/2021 10:52 hs',
    balance: '$0',
  },
  {
    operacion: 'CREDITO',
    importe: '$13.770',
    ordenId: '-',
    referenciaDePago: '-',
    descipcion: 'PAGO REALIZADO EN EFECTIVO',
    fecha: '29/6/2021 10:52 hs',
    balance: '$0',
  },
  {
    operacion: 'CREDITO',
    importe: '$13.770',
    ordenId: '-',
    referenciaDePago: '-',
    descipcion: 'PAGO REALIZADO EN EFECTIVO',
    fecha: '29/6/2021 10:52 hs',
    balance: '$0',
  },
  {
    operacion: 'CREDITO',
    importe: '$13.770',
    ordenId: '-',
    referenciaDePago: '-',
    descipcion: 'PAGO REALIZADO EN EFECTIVO',
    fecha: '29/6/2021 10:52 hs',
    balance: '$0',
  },
  {
    operacion: 'CREDITO',
    importe: '$13.770',
    ordenId: '-',
    referenciaDePago: '-',
    descipcion: 'PAGO REALIZADO EN EFECTIVO',
    fecha: '29/6/2021 10:52 hs',
    balance: '$0',
  },
  {
    operacion: 'CREDITO',
    importe: '$13.770',
    ordenId: '-',
    referenciaDePago: '-',
    descipcion: 'PAGO REALIZADO EN EFECTIVO',
    fecha: '29/6/2021 10:52 hs',
    balance: '$0',
  },
  {
    operacion: 'CREDITO',
    importe: '$13.770',
    ordenId: '-',
    referenciaDePago: '-',
    descipcion: 'PAGO REALIZADO EN EFECTIVO',
    fecha: '29/6/2021 10:52 hs',
    balance: '$0',
  },
  {
    operacion: 'CREDITO',
    importe: '$13.770',
    ordenId: '-',
    referenciaDePago: '-',
    descipcion: 'PAGO REALIZADO EN EFECTIVO',
    fecha: '29/6/2021 10:52 hs',
    balance: '$0',
  },
  {
    operacion: 'CREDITO',
    importe: '$13.770',
    ordenId: '-',
    referenciaDePago: '-',
    descipcion: 'PAGO REALIZADO EN EFECTIVO',
    fecha: '29/6/2021 10:52 hs',
    balance: '$0',
  },
  {
    operacion: 'CREDITO',
    importe: '$13.770',
    ordenId: '-',
    referenciaDePago: '-',
    descipcion: 'PAGO REALIZADO EN EFECTIVO',
    fecha: '29/6/2021 10:52 hs',
    balance: '$0',
  },
  {
    operacion: 'CREDITO',
    importe: '$13.770',
    ordenId: '-',
    referenciaDePago: '-',
    descipcion: 'PAGO REALIZADO EN EFECTIVO',
    fecha: '29/6/2021 10:52 hs',
    balance: '$0',
  },
]

const columns = [
  { name: 'Operacion', selector: 'operacion', sortable: true },
  { name: 'Importe', selector: 'importe', sortable: true },
  { name: 'Orden Id', selector: 'ordenId', sortable: true },
  { name: 'Referencia de Pago', selector: 'referenciaDePago', sortable: true },
  { name: 'Descipcion', selector: 'descipcion', sortable: true },
  { name: 'Fecha', selector: 'fecha', sortable: true },
  { name: 'Balance', selector: 'balance', sortable: true },
]

const pagination = {
  rowsPerPageText: 'Filas por página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos',
}

createTheme('solarized', {
  text: {
    primary: 'var(--color-black-custom-80)',
    secondary: 'var(--color-black-custom-60)',
  },
  background: {
    default: 'transparent',
    hover: 'red',
  },
  context: {
    background: 'transparent',
    text: 'var(--color-black-custom-80)',
  },
  divider: {
    default: 'var(--color-black-custom-05)',
  },
  action: {
    button: 'var(--color-black-custom-80)',
    hover: 'var(--color-black-custom-80)',
    disabled: 'var(--color-black-custom-80)',
  },
})

const customStyles = {
  rows: {
    style: {
      minHeight: '72px',
    },
    highlightOnHoverStyle: {
      backgroundColor: 'var(--color-primary-05)',
    },
  },
  headCells: {
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
    },
  },
}

export default function AccountTable() {
  return (
    <div className={styles.container}>
      <DataTable
        columns={columns}
        customStyles={customStyles}
        data={data}
        highlightOnHover
        pagination
        paginationComponentOptions={pagination}
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10, 25, 50]}
        responsive
        selectableRows
        selectableRowsHighlight
        theme="solarized"
      />
    </div>
  )
}
