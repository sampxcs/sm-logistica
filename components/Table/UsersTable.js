import styles from '../../styles/Table.module.css'
import DataTable, { createTheme } from 'react-data-table-component'
import DotMenuIcon from '../Icons/DotMenuIcon'

const data = [
  {
    id: '96083523',
    nombre: 'Ian Rosales',
    email: 'ianrosales634@gmail.com',
    pedidosCreados: '35',
    perfil: 'Administrador',
    estado: 'En Linea',
    opciones: '',
  },
  {
    id: '10835429',
    nombre: 'Gabriel Ruejas',
    email: 'gruejas@gmail.com',
    pedidosCreados: '29',
    perfil: 'Editor',
    estado: 'En Linea',
    opciones: '',
  },
]

const columns = [
  { name: 'ID', selector: 'id', sortable: true },
  { name: 'Nombre', selector: 'nombre', sortable: true },
  { name: 'Email', selector: 'email', sortable: true },
  { name: 'Pedidos Creados', selector: 'pedidosCreados', sortable: true },
  { name: 'Perfil', selector: 'perfil', sortable: true },
  { name: 'Estado', selector: 'estado', sortable: true },
  { name: 'Opciones', cell: (row) => <DotMenuIcon width='18' />, allowOverflow: true, button: true, style: { cursor: 'pointer' } },
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

export default function UsersTable() {
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
        theme='solarized'
      />
    </div>
  )
}
