import { forwardRef } from 'react'

import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import IconButton from '@mui/material/IconButton'
import { Reorder, useDragControls } from 'framer-motion'

import type { IConditionInputProps } from './I_ConditionInput'
// import * as S from './styles'
import S from './styles.module.scss'
import { DragButton } from '../DragButton/DragButton'
import { Checkbox } from '@mui/material'

export const ConditionInput = forwardRef(
  (
    { icon, condition, isEditable, onChange, onCheck, onDelete, ...props }: IConditionInputProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    const controls = useDragControls()

    const inputIcon =
      icon === 'default' || icon === 'complete' ? (
        <div className={S.InputIcon}>
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
        </div>
      ) : icon ? (
        <div className={S.InputIcon}>{icon}</div>
      ) : null

    return (
      <Reorder.Item
        className={`${S.ConditionInput} ${condition.complete ? S.ConditionInputComplete : ''}`}
        value={condition}
        layout
        dragListener={false}
        dragControls={controls}
        {...props}
      >
        <div className={S.LeftSide}>
          <DragButton
            className={S.InputDragButton}
            onPointerDown={(e: React.PointerEvent<Element>) => controls.start(e)}
          />
          {inputIcon}
        </div>
        <input
          className={S.ToggleInputField}
          ref={ref}
          type='text'
          value={condition.name}
          onChange={onChange}
        />
        {isEditable && (
          <IconButton color='error' onClick={onDelete}>
            <DeleteForeverRoundedIcon />
          </IconButton>
        )}
        <Checkbox
          className={`${S.InputCheckbox} ${condition.complete && S.InputCheckboxChecked}`}
          checked={condition.complete}
          onClick={onCheck}
        />
      </Reorder.Item>
    )
  },
)
