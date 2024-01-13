import * as S from './styles'

export const DragButton = ({ ...props }) => {
  return (
    <S.DragButton
      {...props}
      width='13'
      height='18'
      viewBox='0 0 11 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='2.2' cy='2.2' r='2.2' fill='#5A5A5A' />
      <circle cx='2.2' cy='8.80156' r='2.2' fill='#5A5A5A' />
      <circle cx='2.2' cy='15.4031' r='2.2' fill='#5A5A5A' />
      <circle cx='8.79961' cy='2.2' r='2.2' fill='#5A5A5A' />
      <circle cx='8.79961' cy='8.80156' r='2.2' fill='#5A5A5A' />
      <circle cx='8.79961' cy='15.4031' r='2.2' fill='#5A5A5A' />
    </S.DragButton>
  )
}
