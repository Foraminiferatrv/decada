import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { IconButton, IconButtonProps } from '@mui/material'

// import * as S from './styles'
import S from './styles.module.scss'

import { motion } from 'framer-motion'
import type { ButtonHTMLAttributes } from 'react'

type T_FavoriteButtonProps = IconButtonProps & {
  isFavorite: boolean
  onClick: () => void
}
export const FavoriteButton = ({ isFavorite, onClick, ...props }: T_FavoriteButtonProps) => {
  console.log(props.className)
  return (
    <IconButton
      className={` ${S.FavoriteButton} ${isFavorite ? S.IsFavorite : ''} ${props.className}`}
      onClick={onClick}
      {...props}
    >
      {
        <StarRoundedIcon
          component={motion.svg}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 1.4, rotate: 10, transition: { duration: 0.1 } }}
        />
      }
    </IconButton>
  )
}
