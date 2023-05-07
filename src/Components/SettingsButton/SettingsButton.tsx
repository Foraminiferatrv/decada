import SettingsIcon from '@mui/icons-material/Settings'

import * as S from './styles'
import { motion } from 'framer-motion'

export const SettingsButton = ({ ...props }) => {
  return (
    <S.SettingsButton {...props}>
      <SettingsIcon
        component={motion.svg}
        whileHover={{ scale: 1.3, rotate: 45, transition: { duration: 0.1 } }}
        whileTap={{ rotate: 90, transition: { duration: 0.1 } }}
      />
    </S.SettingsButton>
  )
}
