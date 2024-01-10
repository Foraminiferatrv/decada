import styled from 'styled-components'
import { cyanBluePalette, grayscalePalette } from '../../styles/constants'

interface ProgressBarProps {
  value: number
}

export const ProgressBar = styled.span`
  width: 100%;
  height: 45px;

  display: block;

  border-radius: 5px;
  background: none;
  border: 1px solid #5a5a5a;

  box-shadow: 1px 1px 3px 0px #00000040 inset;
`
export const Inner = styled.span`
  height: 100%;
  ${({ value }: ProgressBarProps) => {
    console.log(`width: ${value}%;`)
    return `width: ${value}%;`
  }}

  display: block;

  background-color: ${cyanBluePalette[300]};
  box-shadow: 1px 1px 3px 0px #00000040 inset;
`
export const Percentage = styled.span`
  position: relative;

  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;

  color: ${grayscalePalette[500]};
  /* color: #fff; */

  top: -34px;
  mix-blend-mode: difference;
  display: block;
`
