import { Type, Static } from '@sinclair/typebox'

export const userSchema = Type.Object({
  user_id: Type.String(),
  email: Type.String({ format: 'email' }),
  password: Type.String({ minLength: 6 }),
  username: Type.String(),
  image: Type.Optional(Type.String()),
  created_at: Type.String({ format: 'date-time' }),
  updated_at: Type.String({ format: 'date-time' }),
})
export type User = Static<typeof userSchema>

export const userUpdateSchema = Type.Object({
  email: Type.Optional(Type.String({ format: 'email' })),
  password: Type.Optional(Type.String({ minLength: 6 })),
  username: Type.Optional(Type.String()),
  image: Type.Optional(Type.String()),
})
export type UserUpdateData = Static<typeof userUpdateSchema>
