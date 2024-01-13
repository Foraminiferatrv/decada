import styled from 'styled-components'
import { grayscalePalette, mainPalette } from '../../app/styles/constants'

import type { ToggleInputProps } from './ToggleInput'

export const ToggleInput = styled.div`
  * {
    color: ${grayscalePalette[600]};
  }
`
export const InputLabel = styled.label`
  margin-left: 10px;
  margin-bottom: 4px;

  display: block;

  font-size: 14px;
`

export const ToggleInputContainer = styled.div`
  height: 45px;

  padding: 0 15px;

  border: 1px solid #5a5a5a;
  border-radius: 5px;

  display: flex;
  align-items: center;
  gap: 10px;

  transition-duration: 0.2s;

  ${({ readOnly }: ToggleInputProps) =>
    !readOnly &&
    `
  box-shadow: ${mainPalette[600]} 0px 0px 10px 0px;
  border: 1px solid ${mainPalette[800]};
  `}
`

export const ToggleInputField = styled.input`
  width: 100%;
  height: 100%;

  border: none !important;
  outline: none;

  background: none;

  text-align: center;

  font-size: 15px;
  font-weight: 600;
`
