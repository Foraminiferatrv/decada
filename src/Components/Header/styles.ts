import styled from 'styled-components'

import { mainPalette, mainContentWidth } from './../../styles/constants'

export const Header = styled.header`
  width: 100%;
  height: 56px;

  display: flex;
  justify-content: center;

  background-color: ${mainPalette[100]};

  padding: 0 20px;
`

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${mainContentWidth};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`
