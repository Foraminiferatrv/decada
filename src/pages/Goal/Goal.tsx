import { Pie, PieChart, ResponsiveContainer } from 'recharts'

import { GoalConditions } from '../../Components/GoalConditions/GoalConditions'
import { GoalDetails } from '../../Components/GoalDetails/GoalDetails'
import { GoalObstacles } from '../../Components/GoalObstacles/GoalObstacles'
import { GoalSolutions } from '../../Components/GoalSolutions/GoalSolutions'
import { useStoreSelector } from '../../hooks/useStore'
import { planApi } from '../../services/plan.api'
import * as S from './styles'

export const Goal = () => {
  const { user_id, plan_id } = useStoreSelector((state) => ({
    user_id: state.me.id!,
    plan_id: state.plan.id!,
  }))

  const goals = planApi.useGetAllGoalsQuery({ user_id, plan_id })
  console.log(goals)
  return (
    <S.Goal>
      <GoalConditions />
      <GoalDetails />
      <GoalObstacles />
      <GoalSolutions />
    </S.Goal>
  )
}
