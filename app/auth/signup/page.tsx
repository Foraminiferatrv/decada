'use client'

import { useState, useTransition } from 'react'
// import { getKnex } from '@/db/knex'
// import { T_User } from '@/models/user.model'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { SignupSchema } from '@/schemas/auth.schema'

import { Input } from '@/Components/input/input'
import { Spinner } from '@/Components/spinner/spinner'
import { logIn, signUp } from '@/actions/auth'
import GoogleIcon from '@/assets/img/icons/google-icon.svg'
import { ROUTES } from '@/constants/routes.constants'
import { zodResolver } from '@hookform/resolvers/zod'
import BadgeIcon from '@mui/icons-material/Badge'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import KeyRoundedIcon from '@mui/icons-material/KeyRounded'

import Link from 'next/link'
import { redirect } from 'next/navigation'
import * as yup from 'yup'
import * as z from 'zod'

// const getDataFromDb = async () => {
//   const knex = getKnex()
//   const result = await knex.select('*').table<T_User>('users')

//   console.log({ result })
//   return result
// }

const LoginFormSchema = SignupSchema.merge(
  z.object({
    repeatPassword: z.string().min(1, {
      message: 'Repeat your password',
    }),
  }),
).refine(
  (values) => {
    return values.password === values.repeatPassword
  },
  {
    message: 'Passwords must match!',
    path: ['repeatPassword'],
  },
)
type SignUpInput = { name: string; email: string; password: string; repeatPassword: string }

export default function SignUp() {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpInput>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: { name: '', email: '', password: '', repeatPassword: '' },
  })
  const isFormError = !!Object.keys(errors).length

  const [isPending, startTransition] = useTransition()

  const onSubmit: SubmitHandler<SignUpInput> = (data): void => {
    startTransition(async () => {
      console.log({ data })
      // signUp(data).then((res) => {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({ data }),
      })

      if (res.ok) redirect(ROUTES.GOAL)
      // if (res) setError(res)

      console.log({ res: res })
    })
    // startTransition(() => logIn(data))
    // SignIn(data)
    //   .unwrap()
    //   .then((userData) => {
    //     dispatch(setMeInfo(userData))
    //     dispatch(setIsAuthenticated(true))
    //     navigate(ROUTES.PLAN)
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //     toast.error('Invalid e-mail or password.')
    //   })
  }

  // const handleCreateAccount = (): void => {
  //   navigate(ROUTES.SIGN_UP)
  // }
  console.log(errors)
  watch()

  return (
    <section className=' flex h-full  w-full flex-col items-center gap-12'>
      <header className='mt-24 text-center text-4xl font-bold text-customGrayscale-600'>
        Sign up to <span className='text-main-800'>Decada</span>
      </header>
      <main className='flex h-[400px] w-96 flex-col justify-between rounded-md bg-white p-5'>
        <form
          className='flex h-[250px] flex-col justify-center gap-3'
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            placeholder='Enter your name'
            icon={BadgeIcon}
            disabled={isPending}
            isError={!!errors.name}
            {...register('name', { required: true })}
            type='text'
          />
          <Input
            placeholder='Enter your e-mail'
            icon={EmailRoundedIcon}
            disabled={isPending}
            isError={!!errors.email}
            {...register('email', {
              required: true,
              onChange: (e) => {
                setError(null)
                return e
              },
            })}
            type='email'
          />
          <Input
            placeholder='Enter your password'
            icon={KeyRoundedIcon}
            disabled={isPending}
            isError={!!errors.password}
            {...register('password', {
              required: true,
              minLength: 4,
            })}
            type='password'
          />
          <Input
            placeholder='Confirm your password'
            icon={KeyRoundedIcon}
            disabled={isPending}
            isError={!!errors.repeatPassword}
            {...register('repeatPassword', { required: true, minLength: 4 })}
            type='password'
          />
          {isPending ? (
            <div className='mt-3 h-11 w-full'>
              <Spinner />
            </div>
          ) : (
            <button
              disabled={isFormError}
              className='mt-3 h-11 cursor-pointer appearance-none rounded-lg bg-main-400 font-black text-gray-600 hover:bg-main-100 active:bg-main-700 disabled:bg-gray-100'
              type='submit'
            >
              Sign in
            </button>
          )}
        </form>
        {errors.password && (
          <span className='text-center text-red-600'>{errors.password.message}</span>
        )}
        {errors.repeatPassword && (
          <span className='text-center text-red-600'>{errors.repeatPassword.message}</span>
        )}
        {error && <span className='text-center text-red-600'>{error}</span>}

        <span className='h-[2px]  w-full rounded-full bg-customGrayscale-300' />
        <button
          className='relative flex h-11 w-full cursor-pointer appearance-none items-center justify-center rounded-lg p-2 shadow hover:bg-main-100 active:bg-main-700'
          type='button'
        >
          <GoogleIcon className='absolute left-6 size-8' />
          Sign in with Google
        </button>
        <span className='h-[2px] w-full rounded-full bg-customGrayscale-300' />
        <Link
          href={ROUTES.LOGIN}
          className='cursor-pointer text-sm font-semibold text-customGrayscale-500 hover:text-main-700'
        >
          {'<-- Log in'}
        </Link>
      </main>
    </section>
  )
}
