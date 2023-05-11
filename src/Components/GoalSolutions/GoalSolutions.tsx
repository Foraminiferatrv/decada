import { SettingsButton } from '../SettingsButton/SettingsButton'

import * as S from './styles'

export const GoalSolutions = () => {
  return (
    <S.GoalSolutions>
      <S.GoalSolutionsHeader>
        <SettingsButton
          onClick={() => {
            return null
          }}
        />
        <span>Solutions</span>
      </S.GoalSolutionsHeader>
    </S.GoalSolutions>
  )
}
