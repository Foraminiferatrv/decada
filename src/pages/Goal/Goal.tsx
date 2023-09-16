import { Pie, PieChart, ResponsiveContainer } from 'recharts'

import { GoalConditions } from '../../Components/GoalConditions/GoalConditions'
import { GoalDetails } from '../../Components/GoalDetails/GoalDetails'
import { GoalObstacles } from '../../Components/GoalObstacles/GoalObstacles'
import { GoalSolutions } from '../../Components/GoalSolutions/GoalSolutions'
import * as S from './styles'

//ww
export const Goal = () => {
  return (
    <S.Goal>
      <GoalConditions />
      <GoalDetails />
      <GoalObstacles />
      <GoalSolutions />
    </S.Goal>
  )
}
