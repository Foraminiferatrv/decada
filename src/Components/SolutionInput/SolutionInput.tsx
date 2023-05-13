import { forwardRef } from 'react'

import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import IconButton from '@mui/material/IconButton'
import { useDragControls } from 'framer-motion'

import type { ISolutionProps } from './ISolutionInput'
import * as S from './styles'

export const SolutionInput = forwardRef(
  (
    { solution, isEditable, onChange, onCheck, onDelete, ...props }: ISolutionProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    const controls = useDragControls()

    return (
      <S.SolutionInput
        value={solution}
        layout
        dragListener={false}
        dragControls={controls}
        {...props}
      >
        <S.LeftSide checked={solution.complete}>
          <S.InputDragButton
            onPointerDown={(e: React.PointerEvent<Element>) => controls.start(e)}
          />
        </S.LeftSide>
        <S.RightSide>
          <S.ToggleInputField
            ref={ref}
            checked={solution.complete}
            type='text'
            value={solution.name}
            onChange={onChange}
          />
          {isEditable && (
            <IconButton color='error' onClick={onDelete}>
              <DeleteForeverRoundedIcon />
            </IconButton>
          )}
          <S.InputCheckbox checked={solution.complete} onClick={onCheck} />
        </S.RightSide>
      </S.SolutionInput>
    )
  },
)
