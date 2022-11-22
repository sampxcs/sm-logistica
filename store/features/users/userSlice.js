import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: 0,
  reducers: {
    incremented: (state) => {
      return (state += 1)
    },
    decremented: (state) => {
      return (state -= 1)
    },
  },
})

export const { incremented, decremented } = userSlice.actions

export default userSlice.reducer
