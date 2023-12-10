export interface I_GoalRes {
  goal_id?: string
  goal_name?: string
  is_favorite?: boolean
  is_complete?: boolean
  priority?: number
  due_time?: number
  plan_id?: string
  created_at?: string
  updated_at?: string
}
export interface I_Goal {
  goal_id: string
  goal_name: string
  is_favorite: boolean
  is_complete: boolean
  priority: number
  due_time: number
}


