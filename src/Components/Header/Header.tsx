import { PlanSelector } from '../PlanSelector/PlanSelector'

import * as S from './styles'

import { NotificationsButton } from '../NotificationsButton/NotificationsButton'
import { CalendarButton } from '../CalendarButton/CalendarButton'
import { CalculatorButton } from '../CalculatorButton/CalculatorButton'
import { Profile } from '../Profile/Profile'

export const Header = () => {
  return (
    <S.Header>
      <S.HeaderWrapper>
        <S.LogoWrapper>
          {/* <Logo/> */}
          <div
            style={{
              width: '36px',
              height: '36px',
              textAlign: 'center',
              borderRadius: '4px',
              backgroundColor: '#45db17',
            }}
          >
            Logo
          </div>

          <PlanSelector />
        </S.LogoWrapper>

        <S.ProfileWrapper>
          <S.ButtonsWrapper>
            <NotificationsButton />
            <CalendarButton />
            <CalculatorButton />
          </S.ButtonsWrapper>

          <Profile />
        </S.ProfileWrapper>
      </S.HeaderWrapper>
    </S.Header>
  )
}
