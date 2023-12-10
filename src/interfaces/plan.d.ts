import { I_Goal } from './goal'

export interface I_PlanRes {
  plan_id: string
  plan_name: string
  is_complete: boolean
  user_id: string
  created_at: string
  updated_at: string
}

interface I_PlanState {
  id: string | null
  name: string | null
  isComplete: boolean
  goals: I_Goal[] | null
}
