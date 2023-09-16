import FormControl from '@mui/material/FormControl'
import MUIInput from '@mui/material/OutlinedInput'
import styled from 'styled-components'

export const LoginWrapper = styled.section`
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
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 20px;

  border-radius: 5px;

  background: #fff;
`

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  height: 200px;
`

export const Input = styled(MUIInput)`
  fieldset {
    border: 2px solid #5a5a5a;
    border-radius: 8px;
    outline: none;
    /* border: none; */
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
export const LoginAction = styled.button`
  height: 55px;

  background: #ffd66b;

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

export const LoginGoogleAction = styled.button`
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

export const OtherActions = styled.div`
  display: flex;
  justify-content: space-evenly;

  color: #7d7d7d;
  font-size: 14px;
  font-weight: 600;
`
export const OtherAction = styled.a`
  cursor: pointer;

  &:hover {
    color: #ff9a3c;
  }
`

export const VertSeparator = styled.span`
  height: 100%;
  width: 5px;

  background: #7d7d7d;
  border-radius: 100px;
`
