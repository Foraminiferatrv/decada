import styled from 'styled-components'
import { grayscalePalette, mainPalette } from '../../styles/constants'
import { Reorder } from 'framer-motion'
import Fab from '@mui/material/Fab'

export const GoalConditions = styled.section`
  height: 382px;

  grid-column: span 5;

  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  padding-bottom: 40px;

  position: relative;

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
  padding: 15px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  border: 2px solid ${mainPalette[300]};
`
export const AddButton = styled(Fab)`
  right: 13%;
  bottom: 6%;

  position: absolute;

  color: ${grayscalePalette[700]};

  &:hover {
    background: ${mainPalette[100]};
  }

  &:active {
    background: ${mainPalette[300]};
  }

  svg {
    font-size: 2.5rem;
  }
`
