import { useState } from 'react'

import AccessTimeIcon from '@mui/icons-material/AccessTime'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined'
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded'

import { SettingsButton } from '../SettingsButton/SettingsButton'

import * as S from './styles'

export const GoalDetails = () => {
  const [readOnly, setReadOnly] = useState<boolean>(true)
  const [goalName, setGoalName] = useState<string>('Drink more water')
  const [goalPriority, setGoalPriority] = useState<any>('2')
  const [goalTime, setGoalTime] = useState<any>('10 days')
  const [isFavorite, setIsFavorite] = useState<boolean>(true)

  const handleSetReadOnly = () => {
    setReadOnly(!readOnly)
  }

  const handleChangeGoalName = (e: React.FormEvent<HTMLInputElement>) => {
    setGoalName(e.currentTarget.value)
  }
  const handleChangeGoalPriority = (e: React.FormEvent<HTMLInputElement>) => {
    setGoalPriority(e.currentTarget.value)
  }
  const handleChangeGoalTime = (e: React.FormEvent<HTMLInputElement>) => {
    setGoalTime(e.currentTarget.value)
  }
  const handleChangeGoalFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <S.GoalDetails>
      <S.GoalDetailsHeader>
        <SettingsButton onClick={handleSetReadOnly} />
        <span>Details</span>
      </S.GoalDetailsHeader>
      <S.GoalDetailsContent>
        <S.GoalInputName
          icon={<BadgeOutlinedIcon />}
          value={goalName}
          readOnly={readOnly}
          label={'Goal name'}
          onChange={handleChangeGoalName}
        />
        <S.GoalFavoriteButton onClick={handleChangeGoalFavorite} isFavorite={isFavorite} />
        <S.GoalToggleInput
          value={goalPriority}
          onChange={handleChangeGoalPriority}
          icon={<LeaderboardRoundedIcon />}
          readOnly={readOnly}
          label={'Goal priority'}
        />
        <S.GoalToggleInput
          value={goalTime}
          onChange={handleChangeGoalTime}
          icon={<AccessTimeIcon />}
          readOnly={readOnly}
          label={'Time for completion'}
        />
        <S.GoalProgressBar value={20} withPercentage />
        <S.GoalProgressBarLabel>4/5</S.GoalProgressBarLabel>
      </S.GoalDetailsContent>
    </S.GoalDetails>
  )
}
