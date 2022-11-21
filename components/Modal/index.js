import MyOrdersTableModal from './MyOrdersTableModal'
import ProfileModal from './ProfileModal'
import UsersTableModal from './UsersTableModal'
import OrderInfoModal from './OrderInfoModal'
import CreateOrderModal from './CreateOrderModal'
import CreateOrderWarningModal from './CreateOrderWarningModal'

export default function Modal({ deleteOrder, modalType, closeModal, coords, select, createOrder, orderStatusCode, data }) {
  switch (modalType) {
    case 'profile':
      return <ProfileModal closeModal={closeModal} coords={coords} />
    case 'users-table':
      return <UsersTableModal closeModal={closeModal} coords={coords} />
    case 'my-orders-table':
      return <MyOrdersTableModal closeModal={closeModal} coords={coords} select={select} deleteOrder={deleteOrder} />
    case 'order-info':
      return <OrderInfoModal closeModal={closeModal} coords={coords} />
    case 'create-order':
      return <CreateOrderModal closeModal={closeModal} createOrder={createOrder} orderStatusCode={orderStatusCode} data={data} />
    case 'create-order-warning':
      return <CreateOrderWarningModal />
    default:
      break
  }
}
