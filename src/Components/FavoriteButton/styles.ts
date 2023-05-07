import styled from 'styled-components'
import IconButton from '@mui/material/IconButton'
import { mainPalette } from '../../styles/constants'

interface IFavoriteButtonProps {
  $isFavorite: boolean
}
export const FavoriteButton = styled(IconButton)`
  height: 50px;
  width: 50px;

  &:hover {
    background: none;
  }

  svg {
    ${(props: IFavoriteButtonProps) =>
      props.$isFavorite ? `color: ${mainPalette[800]};` : `color: transparent;`}

    stroke: ${mainPalette[900]};
    height: 50px;
    width: 50px;

    transition-duration: 0.5s;

    &:hover {
      color: ${mainPalette[500]};
      ${(props: IFavoriteButtonProps) =>
        props.$isFavorite ? `color: ${mainPalette[700]};` : `color: ${mainPalette[200]};;`}

      filter: drop-shadow(0 0 3px ${mainPalette[600]});
    }

    &:focus {
      outline: none;
    }
  }
`
