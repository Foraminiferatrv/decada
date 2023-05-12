import styled from 'styled-components'
import { grayscalePalette, redPalette } from '../../styles/constants'
import { Reorder } from 'framer-motion'

import Fab from '@mui/material/Fab'

export const GoalObstacles = styled.section`
  height: 382px;

  grid-column: span 4;

  position: relative;

  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding-bottom: 40px;

  overflow: hidden;
`

export const GoalObstaclesHeader = styled.div`
  width: 100%;
  height: 40px;

  border-radius: 4px 4px 0 0;

  padding: 0 35px 0 10px;

  color: ${grayscalePalette[600]};
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 5px 5px 0 0;
  background: ${redPalette[200]};
`
export const GoalObstaclesContent = styled(Reorder.Group)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 2px solid ${redPalette[200]};
  padding: 15px;
`

export const AddButton = styled(Fab)`
  right: 13%;
  bottom: 6%;

  position: absolute;

  color: ${grayscalePalette[700]};

  &:hover {
    background: ${redPalette[100]};
  }

  &:active {
    background: ${redPalette[300]};
  }

  svg {
    font-size: 2.5rem;
  }
`
