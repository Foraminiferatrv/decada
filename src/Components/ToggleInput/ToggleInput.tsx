import * as S from './styles'

export interface ToggleInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  readOnly?: boolean
  icon?: React.ReactNode
  label?: string
}

export const ToggleInput = ({ readOnly, icon, label, id, ...props }: ToggleInputProps) => {
  return (
    <S.ToggleInput {...props}>
      {label && <S.InputLabel htmlFor={id}>{label}</S.InputLabel>}
      <S.ToggleInputContainer readOnly={readOnly}>
        {icon && icon}
        <S.ToggleInputField readOnly={readOnly} type='text' {...props} />
      </S.ToggleInputContainer>
    </S.ToggleInput>
  )
}
