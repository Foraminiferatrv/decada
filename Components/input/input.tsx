import React, { InputHTMLAttributes, JSXElementConstructor, Ref } from 'react'

type TInputProps = {
  icon?: JSXElementConstructor<any>
  isError?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export const InputComponent = (
  { icon: Icon, isError, ...props }: TInputProps,
  ref: Ref<HTMLInputElement>,
) => {
  return (
    <div
      className={`relative flex items-center border ${
        isError ? 'border-red-500' : 'border-customGrayscale-400'
      } w-full rounded-md px-3 py-2 leading-tight text-gray-700`}
    >
      {Icon && <Icon className={`absolute ${isError && '!fill-red-500'}`} />}
      <input
        className={`focus:shadow-outline w-full appearance-none focus:outline-none ${
          Icon && 'ml-8'
        }`}
        placeholder='Enter your e-mail'
        type='email'
        ref={ref}
        {...props}
      />
    </div>
  )
}

export const Input = React.forwardRef(InputComponent)
