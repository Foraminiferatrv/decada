import { Type, Static } from '@sinclair/typebox'

export const signUpSchema = Type.Object({
  email: Type.String({ format: 'email' }),
  password: Type.String({ minLength: 6 }),
  name: Type.String(),
  image: Type.Optional(Type.String()),
})
export type SignupSchema = Static<typeof signUpSchema>

export const logInSchema = Type.Object({
  email: Type.String({ format: 'email' }),
  password: Type.String({ minLength: 6 }),
})
export type LoginSchema = Static<typeof logInSchema>
