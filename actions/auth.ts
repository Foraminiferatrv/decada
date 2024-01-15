'use server'

import { loadEnvConfig } from '@next/env'
import { SignupSchema } from '@/schemas/auth.schema'
import bcrypt from 'bcrypt'
import { getKnex } from '@/db/db'
// import { db } from '@/db/db'

const { PASSWORD_SALT } = loadEnvConfig('../').combinedEnv

export const logIn = async (values: any) => {
  return new Promise((resolve) => setTimeout(resolve, 6000))
}

export const signUp = async (values: SignupSchema) => {
  const hashedPassword = await bcrypt.hash(values.password, Number(PASSWORD_SALT!))

  console.log(getKnex())
  // const existingUser = db.distinct().from('users').pluck('email')
  // console.log(existingUser)
  return hashedPassword
}
