import { IconButton, Icon } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import * as S from './styles'

export const CalendarButton = () => {
  return (
    <IconButton sx={S.CalendarButton}>
      <Icon>
        <CalendarMonthIcon />
      </Icon>
    </IconButton>
  )
}
