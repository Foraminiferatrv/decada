import * as S from './styles'

interface ProgressBarProps extends React.PropsWithChildren {
  value: number
  withPercentage?: boolean
}

export const ProgressBar = ({ value, withPercentage, ...props }: ProgressBarProps) => {
  return (
    <S.ProgressBar {...props}>
      <S.Inner value={value} />
      {withPercentage && <S.Percentage>{value + '%'}</S.Percentage>}
    </S.ProgressBar>
  )
}
