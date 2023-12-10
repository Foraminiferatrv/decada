import { useNavigate } from 'react-router-dom'

import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { ROUTES } from '../constants/routes'
import { setIsAuthenticated } from '../store/slices/auth.slice'

// import { loggedOut, tokenRconst baseUrl = import.meta.env.VITE_BASE_URLeceived } from './authSlice'

const BASE_URL = import.meta.env.VITE_BASE_URL

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL })
export const baseQueryWithLogout: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const navigate = useNavigate()
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    api.dispatch(setIsAuthenticated(true))
    navigate(ROUTES.LOGIN)
  } else {
    api.dispatch(setIsAuthenticated(true))
  }
  return result
}
