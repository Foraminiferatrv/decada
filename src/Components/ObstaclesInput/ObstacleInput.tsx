import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded'
import { useDragControls } from 'framer-motion'

import type { IObstacleProps } from './IObstacleInput'
import * as S from './styles'
import { forwardRef } from 'react'

export const ObstacleInput = forwardRef(
  (
    { obstacle, onChange, onCheck, ...props }: IObstacleProps,
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
