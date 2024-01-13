import styled from 'styled-components'

import { mainPalette } from '../../app/styles/constants'

export const Profile = styled.div`
  width: 35px;
  height: 35px;

  background: ${mainPalette[800]};
  border-radius: 4px;

  cursor: pointer;
`

export const ProfilePhoto = {
  width: '100%',
  height: '100%',
}
