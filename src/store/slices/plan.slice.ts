import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { I_Goal } from '../../interfaces/goal'
import { I_PlanState } from '../../interfaces/plan'

const initialState: I_PlanState = {
  id: null,
  goals: null,
  name: null,
  isComplete: false,
}

const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    setGoals: (state, action: PayloadAction<I_Goal[]>) => {
      state.goals = action.payload
    },
  },
})

export const { setGoals } = planSlice.actions

export default planSlice
