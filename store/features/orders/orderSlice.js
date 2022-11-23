import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
  name: 'orders',
  initialState: [],
  reducers: {
    addOrder: async (state, action) => {
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
