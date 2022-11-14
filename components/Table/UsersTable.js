import styles from './Table.module.css'
import { useState } from 'react'

import DataTable, { createTheme } from 'react-data-table-component'
import DotMenuIcon from '../Icons/DotMenuIcon'
import Modal from '../Modal'
import Button from '../Button'

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
  const [coords, setCoords] = useState({ x: -1, y: -1 })
  const [showModal, setShowModal] = useState()

  const handleShowModal = (e) => {
    const rect = e.target.getBoundingClientRect()
    console.log(rect.left, rect.top)
    setCoords({ x: rect.left, y: rect.top + 30 })
    showModal ? setShowModal(false) : setShowModal(true)
  }

  const columns = [
    { name: 'ID', selector: 'id', sortable: true },
    { name: 'Nombre', selector: 'nombre', sortable: true },
    { name: 'Email', selector: 'email', sortable: true },
    { name: 'Pedidos Creados', selector: 'pedidosCreados', sortable: true },
    { name: 'Perfil', selector: 'perfil', sortable: true },
    { name: 'Estado', selector: 'estado', sortable: true },
    {
      name: 'Opciones',
      cell: (row) => (
        <Button className={'circleButton'} light onClick={handleShowModal}>
          <DotMenuIcon width='18' />
        </Button>
      ),
      allowOverflow: true,
      button: true,
      style: { cursor: 'pointer' },
    },
  ]

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
      {showModal && <Modal className={'usersTableModal'} closeModal={handleShowModal} coords={coords} />}
    </div>
  )
}
