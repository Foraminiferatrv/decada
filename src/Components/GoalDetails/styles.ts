import styled from 'styled-components'

import { cyanBluePalette, grayscalePalette, mainPalette } from '../../styles/constants'
import { ToggleInput } from '../ToggleInput/ToggleInput'
import { FavoriteButton } from '../FavoriteButton/FavoriteButton'
import { LinearProgress } from '@mui/material'
import { ProgressBar } from '../ProgressBar/ProgressBar'

export const GoalDetails = styled.section`
  grid-column: span 3;
  height: 382px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`

export const GoalDetailsHeader = styled.div`
  width: 100%;
  height: 40px;

  color: ${grayscalePalette[600]};
  font-weight: 600;

  padding: 0 35px 0 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 5px 5px 0 0;
  background: ${mainPalette[300]};
`

export const GoalDetailsContent = styled.form`
  width: 100%;

  padding: 15px;

  display: grid;

  align-items: center;

  grid-gap: 13px;
  row-gap: 20px;

  grid-template-columns: repeat(12, auto);
`

export const GoalInputName = styled(ToggleInput)`
  grid-column: span 11;
`

export const GoalToggleInput = styled(ToggleInput)`
  grid-column: span 6;
`

export const GoalFavoriteButton = styled(FavoriteButton)`
  margin-top: 15px;
`

export const GoalProgressBar = styled(ProgressBar)`
  margin-top: 15px;
  grid-column: span 11;
`

export const GoalProgressBarLabel = styled.span`
  margin-top: 15px;

  color: ${grayscalePalette[600]};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
`
