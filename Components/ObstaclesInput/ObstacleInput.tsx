import { forwardRef } from 'react'

import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded'
import IconButton from '@mui/material/IconButton'
import { Reorder, useDragControls } from 'framer-motion'

import type { IObstacleProps } from './IObstacleInput'
import S from './styles.module.scss'
import { DragButton } from '../DragButton/DragButton'
import { Checkbox } from '@mui/material'

export const ObstacleInput = forwardRef(
  (
    { obstacle, isEditable, onChange, onCheck, onDelete, ...props }: IObstacleProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    const controls = useDragControls()

    return (
      <Reorder.Item
        className={`${S.ObstacleInput}  ${obstacle.complete ? S.InputComplete : ''}`}
        value={obstacle}
        layout
        dragListener={false}
        dragControls={controls}
        {...props}
      >
        <div className={`${S.LeftSide} ${obstacle.complete ? S.Complete : ''}`}>
          <DragButton
            className={S.InputDragButton}
            onPointerDown={(e: React.PointerEvent<Element>) => controls.start(e)}
          />
        </div>
        <div className={S.RightSide}>
          <input
            className={`${S.ToggleInputField} ${obstacle.complete ? S.InputComplete : ''}`}
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
          <Checkbox
            className={`${S.InputCheckbox} ${obstacle.complete ? S.InputCheckboxChecked : ''}`}
            checkedIcon={<DisabledByDefaultRoundedIcon />}
            checked={obstacle.complete}
            onClick={onCheck}
          />
        </div>
      </Reorder.Item>
    )
  },
)
