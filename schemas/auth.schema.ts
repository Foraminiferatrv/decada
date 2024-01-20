import * as z from 'zod'

export const SignUpSchema = z.object({
  email: z.string().email({
    message: 'Email is required.',
  }),
  password: z.string().min(4, { message: 'Password is required' }),
  name: z.string().min(1, {
    message: 'Name is required',
  }),
  image: z.optional(z.string()),
})

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(4, { message: 'Password is required' }),
})
