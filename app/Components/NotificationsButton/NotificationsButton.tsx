import { IconButton, Icon } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'

import * as S from './styles'

export const NotificationsButton = () => {
  return (
    <IconButton sx={S.NotificationsButton}>
      <Icon>
        <NotificationsNoneIcon />
      </Icon>
    </IconButton>
  )
}
