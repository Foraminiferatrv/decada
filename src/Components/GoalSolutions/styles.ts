import Fab from '@mui/material/Fab'
import { Reorder } from 'framer-motion'
import styled from 'styled-components'

import paper from '../../assets/img/paper.png'
import { grayscalePalette, greenPalette } from '../../styles/constants'

export const GoalSolutions = styled.section`
  height: 382px;

  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  grid-column: span 4;

  position: relative;

  padding-bottom: 40px;

  overflow: hidden;
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
export const GoalSolutionsContent = styled(Reorder.Group)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;

  border: 2px solid ${greenPalette[200]};
  padding: 15px;

  background: url(${paper}) fixed repeat;
`
export const AddButton = styled(Fab)`
  right: 13%;
  bottom: 6%;

  position: absolute;

  color: ${grayscalePalette[700]};

  &:hover {
    background: ${greenPalette[100]};
  }

  &:active {
    background: ${greenPalette[300]};
  }

  svg {
    font-size: 2.5rem;
  }
`
