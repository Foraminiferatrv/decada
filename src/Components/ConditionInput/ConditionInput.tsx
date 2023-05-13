import { forwardRef } from 'react'

import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import IconButton from '@mui/material/IconButton'
import { useDragControls } from 'framer-motion'

import type { IConditionInputProps } from './IConditionInput'
import * as S from './styles'

export const ConditionInput = forwardRef(
  (
    { icon, condition, isEditable, onChange, onCheck, onDelete, ...props }: IConditionInputProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
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
        <S.LeftSide>
          <S.InputDragButton
            onPointerDown={(e: React.PointerEvent<Element>) => controls.start(e)}
          />
          {inputIcon}
        </S.LeftSide>
        <S.ToggleInputField ref={ref} type='text' value={condition.name} onChange={onChange} />
        {isEditable && (
          <IconButton color='error' onClick={onDelete}>
            <DeleteForeverRoundedIcon />
          </IconButton>
        )}
        <S.InputCheckbox checked={condition.complete} onClick={onCheck} />
      </S.ConditionInput>
    )
  },
)
