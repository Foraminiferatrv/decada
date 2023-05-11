import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { ConditionInput } from '../ConditionInput/ConditionInput'
import { SettingsButton } from '../SettingsButton/SettingsButton'
import DiamondIcon from '@mui/icons-material/Diamond'

import * as S from './styles'

interface GoalCondition {
  id: string | number
  index: number
  name: string
  complete: boolean
}

export const GoalConditions = () => {
  const [conditions, setConditions] = useState<GoalCondition[]>([
    { id: uuidv4(), index: 3, name: 'Drink  more wotaa!!', complete: true },
    { id: uuidv4(), index: 0, name: 'Drink more water', complete: false },
    { id: uuidv4(), index: 1, name: 'Buy a glass', complete: false },
    { id: uuidv4(), index: 2, name: 'Drink even more water', complete: false },
    { id: uuidv4(), index: 3, name: 'Drink  more wotaa!!', complete: true },
    { id: uuidv4(), index: 4, name: 'Drink  more wotaa!!', complete: false },
    { id: uuidv4(), index: 5, name: 'Drink  more wotaa!!', complete: false },
    { id: uuidv4(), index: 3, name: 'Drink  more wotaa!!', complete: true },
    { id: uuidv4(), index: 6, name: 'Drink  more wotaa!!', complete: false },
  ])

  const handleConditionChange = (conditionId: string | number, event: any) => {
    const conditionsCopy = [...conditions]
    const targetConditionIndex = conditionsCopy.findIndex(
      (condition) => condition.id === conditionId,
    )
    conditionsCopy[targetConditionIndex].name = event.target.value

    setConditions(conditionsCopy)
  }

  const handleConditionCheck = (conditionId: string | number) => {
    const conditionsCopy = [...conditions]
    const targetConditionIndex = conditionsCopy.findIndex(
      (condition) => condition.id === conditionId,
    )

    conditionsCopy[targetConditionIndex].complete = !conditionsCopy[targetConditionIndex].complete

    setConditions(conditionsCopy)
  }

  const sortConditions = (conditions: GoalCondition[]): GoalCondition[] => {
    const ConditionsCopy = [...conditions]

    const sortedConditions = ConditionsCopy.sort((goalA: GoalCondition, goalB: GoalCondition) => {
      if (goalA.complete && !goalB.complete) {
        return 1
      }
      if (!goalA.complete && goalB.complete) {
        return -1
      }

      return 0
    })

    return sortedConditions
  }

  const conditionsInputs = sortConditions(conditions).map((condition) => (
    <ConditionInput
      key={condition.id}
      icon={condition.complete ? 'complete' : 'default'}
      condition={condition}
      onChange={(e) => handleConditionChange(condition.id, e)}
      onCheck={(e) => handleConditionCheck(condition.id)}
      checked={condition.complete}
    />
  ))

  return (
    <S.GoalConditions>
      <S.GoalConditionsHeader>
        <SettingsButton
          onClick={() => {
            return null
          }}
        />
        <span>Conditions</span>
      </S.GoalConditionsHeader>
      <S.GoalConditionsContent
        axis='y'
        // layout
        style={{ overflowY: 'scroll' }}
        layoutScroll
        values={conditions}
        onReorder={setConditions}
      >
        {conditionsInputs}
      </S.GoalConditionsContent>
    </S.GoalConditions>
  )
}
