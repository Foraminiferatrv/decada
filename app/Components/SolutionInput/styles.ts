import { Reorder } from 'framer-motion'
import styled from 'styled-components'

import { grayscalePalette, mainPalette, greenPalette } from '../../styles/constants'

import Checkbox from '@mui/material/Checkbox'
import { DragButton } from '../UI/DragButton/DragButton'
import { Solution } from './ISolutionInput'

export const SolutionInput = styled(Reorder.Item)`
  width: 100%;
  height: 45px;

  position: relative;

  display: flex;
  align-items: center;

  background: ${greenPalette[100]};

  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);

  ${({ value }: { value: Solution }) =>
    value.complete
      ? `background: ${greenPalette[50]};
    &:hover {
      background: ${grayscalePalette[50]};
    }
  }
    `
      : `&:hover {
      background: ${greenPalette[200]};
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

  border-radius: 5px 0px 0px 5px;

  ${({ checked }: { checked: boolean }) =>
    `background:${checked ? grayscalePalette[400] : greenPalette[400]}`}
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
    background: #fff;
    border: 1px solid ${mainPalette[500]} !important;
  }
`

export const InputCheckbox = styled(Checkbox)`
  margin-left: 10px;

  ${({ checked }: { checked: boolean }) =>
    checked
      ? `color:${grayscalePalette[400]} !important;
        &:hover{
          color:${grayscalePalette[600]} !important;
        }
        `
      : `color:${grayscalePalette[600]}`}
`
