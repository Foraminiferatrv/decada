import styled from 'styled-components'
import { grayscalePalette, mainPalette } from '../../styles/constants'

export const GoalConditions = styled.section`
  /* max-width: 650px; */
  grid-column: span 5;
  height: 382px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`

export const GoalConditionsHeader = styled.div`
  width: 100%;
  height: 40px;

  padding-right: 35px;

  color: ${grayscalePalette[600]};
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: end;

  border-radius: 5px 5px 0 0;
  background: ${mainPalette[300]};
`
