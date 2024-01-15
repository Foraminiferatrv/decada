'use client'
import { Input } from '@/Components/input/input'
import { Spinner } from '@/Components/spinner/spinner'
import { logIn } from '@/actions/auth'
import GoogleIcon from '@/assets/img/icons/google-icon.svg'
import { ROUTES } from '@/constants/routes.constants'

import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import KeyRoundedIcon from '@mui/icons-material/KeyRounded'
import InputAdornment from '@mui/material/InputAdornment'
import Link from 'next/link'
import { useTransition } from 'react'

// import { getKnex } from '@/db/knex'
// import { T_User } from '@/models/user.model'

import { SubmitHandler, useForm } from 'react-hook-form'

// const getDataFromDb = async () => {
//   const knex = getKnex()
//   const result = await knex.select('*').table<T_User>('users')

//   console.log({ result })
//   return result
// }

type TLoginInput = { email: string; password: string }

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TLoginInput>({ defaultValues: { email: '', password: '' } })

  const [isPending, startTransition] = useTransition()

  const onSubmit: SubmitHandler<TLoginInput> = (data): void => {
    // startTransition(() => logIn(data))
    // logIn(data)
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

  watch()

  return (
    <section className=' flex h-full  w-full flex-col items-center gap-12'>
      <header className='mt-24 text-center text-4xl font-bold text-customGrayscale-600'>
        Log in to <span className='text-main-800'>Decada</span>
      </header>
      <main className='flex h-[400px] w-96 flex-col justify-between rounded-md bg-white p-5'>
        <form
          className='flex h-[200px] flex-col justify-center gap-3'
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            placeholder='Enter your e-mail'
            icon={EmailRoundedIcon}
            disabled={isPending}
            isError={!!errors.email}
            {...register('email', { required: true })}
            type='email'
          />
          <Input
            placeholder='Enter your password'
            icon={KeyRoundedIcon}
            disabled={isPending}
            {...register('password', { required: true, minLength: 4 })}
            type='password'
          />
          {isPending ? (
            <div className='mt-3 h-11 w-full'>
              <Spinner />
            </div>
          ) : (
            <button
              className='mt-3 h-11 cursor-pointer appearance-none rounded-lg bg-main-400 font-black text-gray-600 hover:bg-main-100 active:bg-main-700'
              type='submit'
            >
              Login
            </button>
          )}
        </form>

        <span className='h-[2px] w-full rounded-full bg-customGrayscale-300' />
        <button
          className='relative flex h-11 w-full cursor-pointer appearance-none items-center justify-center rounded-lg p-2 shadow hover:bg-main-100 active:bg-main-700'
          type='button'
        >
          <GoogleIcon className='absolute left-6 size-8' />
          Login with Google
        </button>
        <span className=' h-[2px] w-full rounded-full bg-customGrayscale-300' />
        <div className='flex justify-evenly text-sm font-semibold text-customGrayscale-500'>
          <a className='cursor-pointer hover:text-main-700'>Forgot password?</a>
          <span className='h-4 w-1 rounded-full bg-customGrayscale-500' />
          <Link href={ROUTES.SIGN_UP} className='cursor-pointer hover:text-main-700'>
            Create an account
          </Link>
        </div>
      </main>
    </section>
  )
}
