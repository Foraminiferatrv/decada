import * as z from 'zod'

export const SignupSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Email is required.',
    })
    .email({
      message: 'Email is required.',
    }),
  password: z.string().min(4, { message: 'Password is required' }),
  name: z.string().min(1, {
    message: 'Name is required',
  }),
  image: z.optional(z.string()),
})
export type SignupSchema = z.infer<typeof SignupSchema>

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(4, { message: 'Password is required' }),
})

export type LoginSchema = z.infer<typeof SignupSchema>
