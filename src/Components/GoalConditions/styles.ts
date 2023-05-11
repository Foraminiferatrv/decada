import styled from 'styled-components'
import { grayscalePalette, mainPalette } from '../../styles/constants'
import { Reorder } from 'framer-motion'

export const GoalConditions = styled.section`
  grid-column: span 5;
  height: 382px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  padding-bottom: 40px;

  overflow: hidden;
`

export const GoalConditionsHeader = styled.div`
  width: 100%;
  height: 40px;

  color: ${grayscalePalette[600]};
  font-weight: 600;

  padding: 0 35px 0 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 5px 5px 0 0;
  background: ${mainPalette[300]};
`
export const GoalConditionsContent = styled(Reorder.Group)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 15px;
`
