import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { I_MeState } from '../../interfaces/me'
import { I_UserRes } from '../../interfaces/user'

const initialState: I_MeState = {
  id: null,
  name: null,
  email: null,
  image: null,
}

const meSlice = createSlice({
  name: 'me',
  initialState,
  reducers: {
    setMeInfo: (state, action: PayloadAction<I_UserRes>) =>
      (state = {
        ...state,
        id: action.payload.user_id!,
        name: action.payload.username!,
        email: action.payload.email!,
        image: action.payload.image!,
      }),
    resetMeInfo: (state) => (state = initialState),
  },
})

export const { setMeInfo, resetMeInfo } = meSlice.actions

export default meSlice
