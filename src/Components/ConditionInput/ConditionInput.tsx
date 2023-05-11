import * as S from './styles'

import type { IConditionInputProps } from './IConditionInput'
import { useDragControls } from 'framer-motion'

export const ConditionInput = ({
  icon,
  condition,
  onChange,
  onCheck,
  ...props
}: IConditionInputProps) => {
  const controls = useDragControls()

  const inputIcon =
    icon === 'default' || icon === 'complete' ? (
      <S.InputIcon>
        <svg
          width='22'
          height='22'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            y='6.25'
            width='8'
            height='8'
            transform='rotate(-45 0 6.25)'
            fill={icon === 'complete' ? '#4CAF50' : '#FF9A3C'}
          />
        </svg>
      </S.InputIcon>
    ) : icon ? (
      <S.InputIcon>{icon}</S.InputIcon>
    ) : null

  return (
    <S.ConditionInput
      value={condition}
      layout
      dragListener={false}
      dragControls={controls}
      {...props}
    >
      <S.InputDragButton onPointerDown={(e: React.PointerEvent<Element>) => controls.start(e)} />
      {inputIcon}
      <S.ToggleInputField type='text' value={condition.name} onChange={onChange} />
      <S.InputCheckbox checked={condition.complete} onClick={onCheck} />
    </S.ConditionInput>
  )
}
