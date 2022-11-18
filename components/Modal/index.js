import MyOrdersTableModal from './MyOrdersTableModal'
import ProfileModal from './ProfileModal'
import UsersTableModal from './UsersTableModal'
import OrderInfoModal from './OrderInfoModal'

export default function Modal({ deleteOrder, className, closeModal, coords, select }) {
  if (className === 'profileModal') return <ProfileModal closeModal={closeModal} coords={coords} />
  if (className === 'usersTableModal') return <UsersTableModal closeModal={closeModal} coords={coords} />
  if (className === 'myOrdersTableModal')
    return <MyOrdersTableModal closeModal={closeModal} coords={coords} select={select} deleteOrder={deleteOrder} />
  if (className === 'orderInfoModal') return <OrderInfoModal closeModal={closeModal} coords={coords} />
}
