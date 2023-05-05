import styled from 'styled-components'
import { grayscalePalette, mainPalette } from '../../styles/constants'

export const GoalDetails = styled.section`
  grid-column: span 3;
  height: 382px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`

export const GoalDetailsHeader = styled.div`
  width: 100%;
  height: 40px;

  color: ${grayscalePalette[600]};
  font-weight: 600;

  padding-right: 35px;

  display: flex;
  align-items: center;
  justify-content: end;

  border-radius: 5px 5px 0 0;
  background: ${mainPalette[300]};
`
