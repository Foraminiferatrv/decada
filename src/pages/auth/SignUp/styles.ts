import MUIInput from '@mui/material/OutlinedInput'
import styled from 'styled-components'

import { errorColor } from '../../../styles/constants'

export const SignUpWrapper = styled.section`
  width: 100%;
  height: 100%;

  gap: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`

export const Header = styled.header`
  margin-top: 100px;

  text-align: center;
  font-size: 34px;
  font-weight: 700;
  color: #5a5a5a;

  span {
    color: #ff9a3c;
  }
`

export const Content = styled.main`
  width: 370px;
  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding: 20px;

  border-radius: 5px;

  background: #fff;
`

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  height: 350px;
`

export const Input = styled(MUIInput)<{ $isError?: boolean }>`
  fieldset {
    border: ${({ $isError }) => (!$isError ? '2px solid #5a5a5a' : `2px solid ${errorColor}`)};
    border-radius: 8px;
    outline: none;
  }
  &.Mui-focused {
    svg {
      fill: #ff9a3c;
    }
    fieldset {
      border-color: #ff9a3c !important;
    }
  }
`

export const ErrorMessage = styled.p`
  text-align: center;
  color: ${errorColor};
`

export const SignUpAction = styled.button`
  height: 55px;

  background: #ffd66b;

  font-weight: 600;

  outline: none;
  border-radius: 8px;
  border: none;

  cursor: pointer;

  &:hover {
    background: #fff2cc;
  }
  &:active {
    background: #ff9a3c;
  }
`

export const Separator = styled.div`
  width: 100%;
  height: 2px;

  background: #7d7d7d;
`

export const SignUpGoogleAction = styled.button`
  height: 55px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  border-radius: 8px;
  background: #fff;
  filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.25));

  outline: none;
  border: none;

  cursor: pointer;

  &:hover {
    background: #fff2cc;
  }
  &:active {
    background: #ff9a3c;
  }

  svg {
    height: 30px;
    width: 30px;
  }
`
