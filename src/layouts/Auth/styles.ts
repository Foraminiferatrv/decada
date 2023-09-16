import styled from 'styled-components'

import { mainContentWidth } from '../../styles/constants'

export const Pattern = styled.div`
  height: 100%;
  width: 100%;

  position: absolute;
  z-index: 1;
  /* display: flex; */
  /* justify-content: space-between; */
`
export const PatternLeft = styled.svg`
  height: 100%;
  position: absolute;
  left: -10%;
`
export const PatternRight = styled.svg`
  height: 100%;
  position: absolute;
  right: 0;
`

export const Main = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  background: #fff2cc;
`
export const ContentWrapper = styled.div`
  z-index: 20;
  width: 100%;
  margin: 0 20px;
  max-width: ${mainContentWidth};
`
