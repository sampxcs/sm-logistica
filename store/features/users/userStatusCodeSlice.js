import { createSlice } from '@reduxjs/toolkit'

import { USER_STATUS } from '../../../utils/dictionary'

export const userStatusCodeSlice = createSlice({
  name: 'userStatusCode',
  initialState: USER_STATUS.UNDEFINED,
  reducers: {
    setUserStatusCode: (state, action) => {
      return (state = action.payload)
    },
  },
})

export const { setUserStatusCode } = userStatusCodeSlice.actions

export default userStatusCodeSlice.reducer
