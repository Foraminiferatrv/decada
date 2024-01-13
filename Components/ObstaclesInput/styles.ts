import { motion, Reorder } from 'framer-motion'
import styled from 'styled-components'

import { grayscalePalette, redPalette, mainPalette } from '../../app/styles/constants'

import Checkbox from '@mui/material/Checkbox'
import { DragButton } from '../UI/DragButton/DragButton'
import { Obstacle } from './IObstacleInput'

export const ObstacleInput = styled(Reorder.Item)`
  width: 100%;
  height: 45px;

  position: relative;

  display: flex;
  align-items: center;

  background: ${redPalette[100]};

  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);

  ${({ value }: { value: Obstacle }) =>
    value.complete
      ? `background: ${grayscalePalette[200]};
    &:hover {
      background: ${grayscalePalette[50]};
    }
    &::before {
      position: absolute;
      content: '';
      width: 90%;
      left: 20px;
      top: 50%;
      animation: cross 100ms;
      border-top: 2px solid ${grayscalePalette[600]};
  }
    `
      : `&:hover {
      background: ${redPalette[200]};
    }`}

  @keyframes cross {
    from {
      width: 0;
    }
    to {
      width: 90%;
    }
  }
`
export const LeftSide = styled.div`
  height: 100%;
  padding: 10px;

  display: flex;
  align-items: center;

  /* background: #e86466; */
  border-radius: 5px 0px 0px 5px;

  ${({ checked }: { checked: boolean }) =>
    `background:${checked ? grayscalePalette[400] : redPalette[400]}`}
`
export const RightSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  padding: 10px;
`

export const InputDragButton = styled(DragButton)`
  display: flex;
  align-items: center;
  margin-right: 10px;
`

export const ToggleInputField = styled.input`
  width: 100%;
  height: 100%;

  padding: 10px;

  ${({ checked }: { checked: boolean }) =>
    `color:${checked ? grayscalePalette[400] : grayscalePalette[600]};
    
    `}

  /* color: ${grayscalePalette[600]}; */

  border: none !important;
  border-radius: 3px;
  outline: none;

  background: none;

  font-size: 15px;
  font-weight: 600;

  &:hover {
    background: #fff;
    border: 1px solid ${mainPalette[500]} !important;
  }

  &:focus {
    border: 1px solid ${mainPalette[500]} !important;
    background: #fff;
  }
`

export const InputCheckbox = styled(Checkbox)`
  margin-left: 10px;
  ${({ checked }: { checked: boolean }) =>
    checked
      ? `color:${grayscalePalette[600]} !important;
        &:hover{
          color:${grayscalePalette[400]} !important;
        }
        `
      : `color:${grayscalePalette[600]}`}
`
