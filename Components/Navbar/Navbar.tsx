import AddToPhotosIcon from '@mui/icons-material/AddToPhotos'
import IconButton from '@mui/material/IconButton'

import { ROUTES } from '../../constants/routes.constants'
import { GoalSelector } from '../GoalSelector/GoalSelector'

// import * as S from './styles'
import S from './styles.module.scss'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className={S.Navbar}>
      <div className={S.NavbarWrapper}>
        <div className={S.NavlinksWrapper}>
          {/* <S.NavItem to={ROUTES.GOAL}>Goal</S.NavItem>
          <S.NavItem to={ROUTES.FINANCES}>Finances</S.NavItem>
          <S.NavItem to={ROUTES.HABITS}>Habits</S.NavItem>
          <S.NavItem to={ROUTES.TIME}>Time</S.NavItem> */}
          <Link className={S.NavItem} href={ROUTES.GOAL}>
            Goal
          </Link>
          <Link className={S.NavItem} href={ROUTES.FINANCES}>
            Finances
          </Link>
          <Link className={S.NavItem} href={ROUTES.HABITS}>
            Habits
          </Link>
          <Link className={S.NavItem} href={ROUTES.TIME}>
            Time
          </Link>
        </div>
        <IconButton>
          <AddToPhotosIcon />
        </IconButton>
        <GoalSelector />
      </div>
    </nav>
  )
}
