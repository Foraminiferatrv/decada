import S from './styles.module.scss'
// import * as S from './styles'

type T_ProgressBarProps = React.HTMLAttributes<HTMLSpanElement> & {
  value: number
  withPercentage?: boolean
}

export const ProgressBar = ({ value, withPercentage, className, ...props }: T_ProgressBarProps) => {
  return (
    <span className={`${className} ${S.ProgressBar}`} {...props}>
      <span className={S.Inner} style={{ width: `${value}%` }} />
      {withPercentage && <span className={S.Percentage}>{value + '%'}</span>}
    </span>
  )
}
