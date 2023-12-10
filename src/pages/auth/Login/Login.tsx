import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import KeyRoundedIcon from '@mui/icons-material/KeyRounded'
import InputAdornment from '@mui/material/InputAdornment'

import GoogleIcon from '../../../assets/img/icons/google-icon.svg'
import { ROUTES } from '../../../constants/routes'
import { useStoreDispatch } from '../../../hooks/useStore'
import { authApi } from '../../../services/auth.api'
import { setIsAuthenticated } from '../../../store/slices/auth.slice'
import { setMeInfo } from '../../../store/slices/me.slice'
import * as S from './styles'

interface I_LoginInput {
  email: string
  password: string
}

export const Login = () => {
  const [logIn, { isSuccess, isError, isLoading }] = authApi.useLogInMutation()
  const dispatch = useStoreDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<I_LoginInput>({ defaultValues: { email: '', password: '' } })

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<I_LoginInput> = (data): void => {
    logIn(data)
      .unwrap()
      .then((userData) => {
        dispatch(setMeInfo(userData))
        dispatch(setIsAuthenticated(true))
        navigate(ROUTES.PLAN)
      })
      .catch((error) => {
        console.error(error)
        toast.error('Invalid e-mail or password.')
      })
  }

  const handleCreateAccount = (): void => {
    navigate(ROUTES.SIGN_UP)
  }

  return (
    <S.LoginWrapper>
      <S.Header>
        Log in to <span>Decada</span>
      </S.Header>
      <S.Content>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Input
            placeholder='Enter your e-mail'
            startAdornment={
              <InputAdornment position='start'>
                <EmailRoundedIcon />
              </InputAdornment>
            }
            {...register('email', { required: true })}
            type='email'
          />
          <S.Input
            placeholder='Enter your password'
            startAdornment={
              <InputAdornment position='start'>
                <KeyRoundedIcon />
              </InputAdornment>
            }
            {...register('password', { required: true, minLength: 4 })}
            type='password'
          />
          <S.LoginAction type='submit'>Login</S.LoginAction>
        </S.Form>
        <S.Separator />
        <S.LoginGoogleAction type='button'>
          <GoogleIcon />
          Login with Google
        </S.LoginGoogleAction>
        <S.Separator />
        <S.OtherActions>
          <S.OtherAction>Forgot password?</S.OtherAction>
          <S.VertSeparator></S.VertSeparator>
          <S.OtherAction onClick={handleCreateAccount}>Create an account</S.OtherAction>
        </S.OtherActions>
      </S.Content>
    </S.LoginWrapper>
  )
}
