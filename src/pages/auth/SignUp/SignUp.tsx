import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import BadgeIcon from '@mui/icons-material/Badge'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import KeyRoundedIcon from '@mui/icons-material/KeyRounded'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import * as yup from 'yup'

import GoogleIcon from '../../../assets/img/icons/google-icon.svg'
import { authApi } from '../../../services/auth.api'
import * as S from './styles'

interface ISignUpInput {
  username: string
  email: string
  password: string
  repeatPassword: string
}

export const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

  const [signUp, { isError, isLoading, isSuccess }] = authApi.useSignInMutation()

  const singUpSchema = yup.object({
    username: yup.string().required('Username is required.').max(100),
    email: yup.string().required('E-mail is required.').email('Provide a valid email.'),
    password: yup
      .string()
      .required('Password is required.')
      .min(4, 'Password length should be at least 4 characters'),
    repeatPassword: yup
      .string()
      .required('Repeat your password.')
      .oneOf([yup.ref('password')], 'Passwords do not match'),
  })
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignUpInput>({
    resolver: yupResolver(singUpSchema),
    defaultValues: { username: '', email: '', password: '', repeatPassword: '' },
  })

  const onSubmit: SubmitHandler<ISignUpInput> = ({ username, email, password }) => {
    signUp({ username, email, password })
  }

  useEffect(() => {
    if (isError) toast.error('Server error.')
  }, [isError])

  watch()

  return (
    <S.SignUpWrapper>
      <S.Header>
        Sign up to <span>Decada</span>
      </S.Header>
      <S.Content>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Input
            placeholder='Enter your name'
            startAdornment={
              <InputAdornment position='start'>
                <BadgeIcon />
              </InputAdornment>
            }
            {...register('username', { required: true })}
            type='text'
          />
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
            endAdornment={
              <InputAdornment position='end'>
                <IconButton onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                  {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
            {...register('password', { required: true, minLength: 4 })}
            type={isPasswordVisible ? 'text' : 'password'}
          />
          <S.Input
            placeholder='Repeat your password'
            $isError={!!errors.repeatPassword}
            startAdornment={
              <InputAdornment position='start'>
                <KeyRoundedIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position='end'>
                <IconButton onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                  {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
            {...register('repeatPassword', { required: true })}
            type={isPasswordVisible ? 'text' : 'password'}
          />
          <S.ErrorMessage>{errors.repeatPassword?.message}</S.ErrorMessage>
          <S.SignUpAction type='submit'>Sign Up</S.SignUpAction>
        </S.Form>
        <S.SignUpGoogleAction type='button'>
          <GoogleIcon />
          SignUp with Google
        </S.SignUpGoogleAction>
      </S.Content>
    </S.SignUpWrapper>
  )
}
