import AddToPhotosIcon from '@mui/icons-material/AddToPhotos'
import IconButton from '@mui/material/IconButton'

import { ROUTES } from '../../constants/routes'
import { GoalSelector } from '../GoalSelector/GoalSelector'

import * as S from './styles'

export const Navbar = () => {
  return (
    <S.Navbar>
      <S.NavbarWrapper>
        <S.NavlinksWrapper>
          <S.NavItem to={ROUTES.GOAL}>Goal</S.NavItem>
          <S.NavItem to={ROUTES.FINANCES}>Finances</S.NavItem>
          <S.NavItem to={ROUTES.HABITS}>Habits</S.NavItem>
          <S.NavItem to={ROUTES.TIME}>Time</S.NavItem>
        </S.NavlinksWrapper>
        <IconButton>
          <AddToPhotosIcon />
        </IconButton>
        <GoalSelector />
      </S.NavbarWrapper>
    </S.Navbar>
  )
}
