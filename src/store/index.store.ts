import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { authApi } from '../services/auth.api'
import { planApi } from '../services/plan.api'
import authSlice from './slices/auth.slice'
import meSlice from './slices/me.slice'
import planSlice from './slices/plan.slice'

const rootReducer = combineReducers({
  [meSlice.name]: meSlice.reducer,
  [authSlice.name]: authSlice.reducer,
  [planSlice.name]: planSlice.reducer,

  [authApi.reducerPath]: authApi.reducer,
  [planApi.reducerPath]: planApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, planApi.middleware]),
})

export type RootState = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch
