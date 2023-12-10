import { createApi } from '@reduxjs/toolkit/query/react'

import { I_GoalRes } from '../interfaces/goal'
import { baseQueryWithLogout } from '../utils/baseQuery'

export const planApi = createApi({
  reducerPath: 'planApi',
  baseQuery: baseQueryWithLogout,
  tagTypes: ['Plan'],
  endpoints: (builder) => ({
    getAllPlans: builder.query<void, string>({
      query: (user_id) => ({
        url: `users/${user_id}/plans/`,
        credentials: 'include',
        method: 'GET',
      }),
    }),
    getAllGoals: builder.query<I_GoalRes, { user_id: string; plan_id: string }>({
      query: ({ user_id, plan_id }) => ({
        url: `users/${user_id}/plans/${plan_id}/goals`,
        credentials: 'include',
        method: 'GET',
      }),
    }),
  }),
})
