import styled from 'styled-components'
import { grayscalePalette, greenPalette } from '../../styles/constants'

export const GoalSolutions = styled.section`
  /* max-width: 650px; */
  grid-column: span 4;
  height: 382px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`

export const GoalSolutionsHeader = styled.div`
  width: 100%;
  height: 40px;

  padding: 0 35px 0 10px;

  color: ${grayscalePalette[600]};
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 5px 5px 0 0;
  background: ${greenPalette[200]};
`
