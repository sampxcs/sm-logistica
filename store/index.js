import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/users/userSlice'
import orderReducer from './features/orders/orderSlice'
import userStatusCodeReducer from './features/users/userStatusCodeSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    userStatusCode: userStatusCodeReducer,
    order: orderReducer,
  },
})
