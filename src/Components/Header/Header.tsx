import { PlanSelector } from '../PlanSelector/PlanSelector'
import * as S from './styles'

export const Header = () => {
  return (
    <S.Header>
      {/* <Logo/> */}
      <div style={{ width: '36px', height: '36px', backgroundColor: '#45db17' }}></div>

      <PlanSelector />

      {/* <Notifications/> */}
      {/* <Calendar/> */}
      {/* <Calculator/> */}

      {/* <Profile/> */}
    </S.Header>
  )
}
