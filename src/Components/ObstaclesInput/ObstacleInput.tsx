import { forwardRef } from 'react'

import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded'
import IconButton from '@mui/material/IconButton'
import { useDragControls } from 'framer-motion'

import type { IObstacleProps } from './IObstacleInput'
import * as S from './styles'

export const ObstacleInput = forwardRef(
  (
    { obstacle, isEditable, onChange, onCheck, onDelete, ...props }: IObstacleProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    const controls = useDragControls()

    return (
      <S.ObstacleInput
        value={obstacle}
        layout
        dragListener={false}
        dragControls={controls}
        {...props}
      >
        <S.LeftSide checked={obstacle.complete}>
          <S.InputDragButton
            onPointerDown={(e: React.PointerEvent<Element>) => controls.start(e)}
          />
        </S.LeftSide>
        <S.RightSide>
          <S.ToggleInputField
            ref={ref}
            checked={obstacle.complete}
            type='text'
            value={obstacle.name}
            onChange={onChange}
          />
          {isEditable && (
            <IconButton color='error' onClick={onDelete}>
              <DeleteForeverRoundedIcon />
            </IconButton>
          )}
          <S.InputCheckbox
            checkedIcon={<DisabledByDefaultRoundedIcon />}
            checked={obstacle.complete}
            onClick={onCheck}
          />
        </S.RightSide>
      </S.ObstacleInput>
    )
  },
)
