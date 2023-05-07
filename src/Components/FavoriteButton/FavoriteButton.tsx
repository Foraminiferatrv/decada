import StarRoundedIcon from '@mui/icons-material/StarRounded'

import * as S from './styles'
import { motion } from 'framer-motion'

interface IFavoriteButtonProps {
  isFavorite: boolean
  onClick: () => void
}

export const FavoriteButton = ({ isFavorite, onClick, ...props }: IFavoriteButtonProps) => {
  return (
    <S.FavoriteButton onClick={onClick} $isFavorite={isFavorite} {...props}>
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
    </S.FavoriteButton>
  )
}
