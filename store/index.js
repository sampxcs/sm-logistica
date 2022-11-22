import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/users/userSlice'
import orderSlice from './features/orders/orderSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    orders: orderSlice,
  },
})
