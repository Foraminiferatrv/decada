import styled from 'styled-components'

import { mainContentWidth } from '../styles/constants'

export const Main = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
`
export const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 20px;
  max-width: ${mainContentWidth};
`
