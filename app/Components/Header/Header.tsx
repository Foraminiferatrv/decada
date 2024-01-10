import { PlanSelector } from '../PlanSelector/PlanSelector'

// import * as S from './styles'
import S from './styles.module.scss'

import { NotificationsButton } from '../NotificationsButton/NotificationsButton'
import { CalendarButton } from '../CalendarButton/CalendarButton'
import { CalculatorButton } from '../CalculatorButton/CalculatorButton'
import { Profile } from '../Profile/Profile'

export const Header = () => {
  return (
    <header className={S.Header}>
      <div className={S.HeaderWrapper}>
        <div className={S.LogoWrapper}>
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
        </div>

        <div className={S.ProfileWrapper}>
          <div className={S.ProfileWrapper}>
            <NotificationsButton />
            <CalendarButton />
            <CalculatorButton />
          </div>

          <Profile />
        </div>
      </div>
    </header>
  )
}
