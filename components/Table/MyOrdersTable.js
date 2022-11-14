import { useState } from 'react'
import styles from './Table.module.css'

import DataTable, { createTheme } from 'react-data-table-component'

import DotMenuIcon from '../Icons/DotMenuIcon'

import NoDataTable from './NoDataTable'
import Modal from '../Modal'
import Button from '../Button'

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

export default function MyOrdersTable({ user }) {
  const [coords, setCoords] = useState({ x: -1, y: -1 })
  const [showModal, setShowModal] = useState()

  const data = user.orders

  const handleShowModal = (e) => {
    const rect = e.target.getBoundingClientRect()
    console.log(rect.left, rect.top)
    setCoords({ x: rect.left, y: rect.top + 30 })
    showModal ? setShowModal(false) : setShowModal(true)
  }

  const columns = [
    { name: 'Nro. de Pedido', selector: 'orderId', sortable: true },
    { name: 'Nombre', selector: 'name', sortable: true },
    { name: 'Localidad', selector: 'location', sortable: true },
    { name: 'CP', selector: 'cp', sortable: true },
    { name: 'Tipo De Envio', selector: 'type', sortable: true },
    { name: 'Transporte', selector: 'transport', sortable: true },
    { name: 'Creado', selector: 'date', sortable: true },
    { name: 'Nro. de Guia', selector: 'cant', sortable: true },
    { name: 'Estado', selector: 'status', sortable: true },
    {
      name: 'Opciones',
      cell: (row) => (
        <Button className={'circleButton'} light onClick={handleShowModal}>
          <DotMenuIcon width='18' />
        </Button>
      ),
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
        paginationPerPage={25}
        paginationRowsPerPageOptions={[10, 25, 50]}
        responsive
        theme='solarized'
        noDataComponent={<NoDataTable />}
      />
      {showModal && <Modal className={'myOrdersTableModal'} closeModal={handleShowModal} coords={coords} />}
    </div>
  )
}
