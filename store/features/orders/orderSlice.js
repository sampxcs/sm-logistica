import { createSlice } from '@reduxjs/toolkit'
import { createOrder } from '../../../hooks/useUser'

export const orderSlice = createSlice({
  name: 'orders',
  initialState: [
    {
      amount: '2600',
      cant: '',
      cp: '1854',
      cuit: '',
      date: '14/11/2022',
      department: '',
      description: '',
      document: '35142419',
      email: 'JONATHAN.LEZCANO12@GMAIL.COM',
      flat: '',
      id: '637273398beaaa57242d29de',
      location: 'ALMIRANTE BROWN',
      name: 'JONATHAN LEZCANO',
      orderId: '4',
      province: 'BUENOS AIRES',
      specification: '',
      status: 'PENDIENTE',
      street: 'RICARDO DAVEL',
      streetHeight: '2830',
      tel: '1165013535',
      transport: 'MOTO EXPRESS',
      transportName: '',
      type: 'SUCURSAL',
      user: '637187a7f9a5f536bde1c253',
      weight: '',
    },
  ],
  reducers: {
    addOrder: async (state, action) => {
      console.log(createOrder)
      try {
        const result = await createOrder(action.payload)
        console.log(result)
        return [...state, result.orders]
      } catch (error) {
        return state
      }
    },
    decremented: (state) => {
      return (state -= 1)
    },
  },
})

export const { addOrder } = orderSlice.actions

export default orderSlice.reducer
