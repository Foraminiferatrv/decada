import { motion, Reorder } from 'framer-motion'
import styled from 'styled-components'

import { grayscalePalette, greenPalette, mainPalette } from '../../styles/constants'

import Checkbox from '@mui/material/Checkbox'
import { DragButton } from '../UI/DragButton/DragButton'
import { Condition } from './IConditionInput'

// import type { IConditionInputProps } from './IConditionInput'

export const ConditionInput = styled(Reorder.Item)`
  * {
  }
  width: 100%;
  height: 45px;

  padding: 10px;

  display: flex;
  align-items: center;

  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);

  ${({ value }: { value: Condition }) =>
    value.complete
      ? `background: ${greenPalette[100]};
    &:hover {
      background: ${greenPalette[50]};
    }`
      : `&:hover {
      background: ${mainPalette[100]};
    }`}/* transition-duration: 0.3s; */
`

export const InputDragButton = styled(DragButton)`
  margin-right: 10px;
`

export const InputIcon = styled.div`
  max-width: 23px;
  min-height: 23px;

  margin-right: 5px;

  display: flex;
  align-items: center;
`

export const ToggleInputField = styled.input`
  width: 100%;
  height: 100%;

  padding: 10px;

  color: ${grayscalePalette[600]};

  border: none !important;
  border-radius: 3px;
  outline: none;

  background: none;

  font-size: 15px;
  font-weight: 600;

  &:hover {
    background: #fff;
    border: 1px solid ${mainPalette[500]};
  }
`

export const InputCheckbox = styled(Checkbox)`
  margin-left: 10px;
  /* color: ${grayscalePalette[600]}; */
  ${({ checked }: { checked: boolean }) =>
    checked
      ? `color:${greenPalette[700]} !important;
        &:hover{
          color:${greenPalette[500]} !important;
        }
        `
      : `color:${grayscalePalette[600]}`}/* svg {
    color: #fff !important;
  } */
`
