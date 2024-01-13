'use client'

import { useState } from 'react'

import AccessTimeIcon from '@mui/icons-material/AccessTime'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined'
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded'

import { SettingsButton } from '../SettingsButton/SettingsButton'

// import * as S from './styles'
import S from './styles.module.scss'
import { ToggleInput } from '../ToggleInput/ToggleInput'
import { FavoriteButton } from '../FavoriteButton/FavoriteButton'
import { ProgressBar } from '../ProgressBar/ProgressBar'

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
    <section className={S.GoalDetails}>
      <div className={S.GoalDetailsHeader}>
        <SettingsButton onClick={handleSetReadOnly} />
        <span>Details</span>
      </div>
      <form className={S.GoalDetailsContent}>
        <ToggleInput
          className={S.GoalInputName}
          icon={<BadgeOutlinedIcon />}
          value={goalName}
          readOnly={readOnly}
          label={'Goal name'}
          onChange={handleChangeGoalName}
        />
        <FavoriteButton
          className={S.GoalFavoriteButton}
          onClick={handleChangeGoalFavorite}
          isFavorite={isFavorite}
        />
        <ToggleInput
          className={S.GoalToggleInput}
          value={goalPriority}
          onChange={handleChangeGoalPriority}
          icon={<LeaderboardRoundedIcon />}
          readOnly={readOnly}
          label={'Goal priority'}
        />
        <ToggleInput
          className={S.GoalToggleInput}
          value={goalTime}
          onChange={handleChangeGoalTime}
          icon={<AccessTimeIcon />}
          readOnly={readOnly}
          label={'Time for completion'}
        />
        <ProgressBar className={S.GoalProgressBar} value={20} withPercentage />
        <span className={S.GoalProgressBarLabel}>4/5</span>
      </form>
    </section>
  )
}
