import { IconButton, Icon } from '@mui/material'
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined'
import * as S from './styles'

export const CalculatorButton = () => {
  return (
    <IconButton sx={S.CalculatorButton}>
      <Icon>
        <CalculateOutlinedIcon />
      </Icon>
    </IconButton>
  )
}
