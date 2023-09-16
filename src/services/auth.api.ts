import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { I_UserLogIn, I_UserSignUp } from '../types/user'

const baseUrl = import.meta.env.VITE_BASE_URL

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    healthCheck: builder.query<void, void>({
      query: () => ({
        url: `healthcheck`,
        method: 'GET',
      }),
    }),
    logIn: builder.mutation<string, I_UserLogIn>({
      query: (body) => ({
        url: 'auth/login',
        credentials: 'include',
        method: 'POST',
        body,
      }),
    }),
    signIn: builder.mutation<string, I_UserSignUp>({
      query: (body) => ({
        url: 'users/register',
        credentials: 'include',
        method: 'PUT',
        body,
      }),
    }),
  }),
})
