import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { I_UserLogInReq, I_UserRes, I_UserSignUpReq } from '../interfaces/user'

const BASE_URL = import.meta.env.VITE_BASE_URL

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    healthCheck: builder.query<void, void>({
      query: () => ({
        url: `healthcheck`,
        method: 'GET',
      }),
    }),
    checkAuth: builder.query<void, void>({
      query: () => ({
        url: 'auth/',
        method: 'GET',
        credentials: 'include',
      }),
    }),
    logIn: builder.mutation<I_UserRes, I_UserLogInReq>({
      query: (body) => ({
        url: 'auth/login',
        credentials: 'include',
        method: 'POST',
        body,
      }),
    }),
    signIn: builder.mutation<string, I_UserSignUpReq>({
      query: (body) => ({
        url: 'users/register',
        credentials: 'include',
        method: 'PUT',
        body,
      }),
    }),
  }),
})
