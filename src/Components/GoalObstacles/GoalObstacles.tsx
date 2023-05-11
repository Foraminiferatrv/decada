import { SettingsButton } from '../SettingsButton/SettingsButton'

import * as S from './styles'

export const GoalObstacles = () => {
  return (
    <S.GoalObstacles>
      <S.GoalObstaclesHeader>
        <SettingsButton
          onClick={() => {
            return null
          }}
        />
        <span>Obstacles</span>
      </S.GoalObstaclesHeader>
    </S.GoalObstacles>
  )
}
