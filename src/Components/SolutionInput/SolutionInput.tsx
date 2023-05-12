import { useDragControls } from 'framer-motion'

import type { ISolutionProps } from './ISolutionInput'
import * as S from './styles'
import { forwardRef } from 'react'

export const SolutionInput = forwardRef(
  (
    { solution, onChange, onCheck, ...props }: ISolutionProps,
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
          <S.InputCheckbox checked={solution.complete} onClick={onCheck} />
        </S.RightSide>
      </S.SolutionInput>
    )
  },
)
