import { forwardRef } from 'react'

import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import IconButton from '@mui/material/IconButton'
import { Reorder, useDragControls } from 'framer-motion'

import type { ISolutionProps } from './ISolutionInput'

import S from './styles.module.scss'
import { DragButton } from '../DragButton/DragButton'
import { Checkbox } from '@mui/material'

export const SolutionInput = forwardRef(
  (
    { solution, isEditable, onChange, onCheck, onDelete, ...props }: ISolutionProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    const controls = useDragControls()

    return (
      <Reorder.Item
        className={`${S.SolutionInput}  ${solution.complete ? S.InputComplete : ''}`}
        value={solution}
        layout
        dragListener={false}
        dragControls={controls}
        {...props}
      >
        <div className={`${S.LeftSide} ${solution.complete ? S.Complete : ''}`}>
          <DragButton
            className={S.InputDragButton}
            onPointerDown={(e: React.PointerEvent<Element>) => controls.start(e)}
          />
        </div>
        <div className={S.RightSide}>
          <input
            className={`${S.ToggleInputField} ${solution.complete ? S.InputComplete : ''}`}
            ref={ref}
            // checked={solution.complete}
            type='text'
            value={solution.name}
            onChange={onChange}
          />
          {isEditable && (
            <IconButton color='error' onClick={onDelete}>
              <DeleteForeverRoundedIcon />
            </IconButton>
          )}
          <Checkbox
            checked={solution.complete}
            className={`${S.InputCheckbox} ${solution.complete ? S.InputCheckboxChecked : ''}`}
            onClick={onCheck}
          />
        </div>
      </Reorder.Item>
    )
  },
)
