import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded'
import { useDragControls } from 'framer-motion'

import type { IObstacleProps } from './IObstacleInput'
import * as S from './styles'

export const ObstacleInput = ({ obstacle, onChange, onCheck, ...props }: IObstacleProps) => {
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
        <S.InputDragButton onPointerDown={(e: React.PointerEvent<Element>) => controls.start(e)} />
      </S.LeftSide>
      <S.RightSide>
        <S.ToggleInputField
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
}
