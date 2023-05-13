import { useEffect, useRef, useState } from 'react'

import AddRoundedIcon from '@mui/icons-material/AddRounded'
import { v4 as uuidv4 } from 'uuid'

import { ConditionInput } from '../ConditionInput/ConditionInput'
import { SettingsButton } from '../SettingsButton/SettingsButton'
import * as S from './styles'

interface GoalCondition {
  id: string
  name: string
  complete: boolean
}

//TODO: Slit into 2 arrays "complete" and "incomplete"

const goalConditions: GoalCondition[] = [
  { id: uuidv4(), name: 'Drink  more wotaa!!', complete: true },
  { id: uuidv4(), name: 'Drink even more water', complete: false },
  { id: uuidv4(), name: 'Drink  more wotaa!!', complete: true },
  { id: uuidv4(), name: 'Drink  more wotaa!!', complete: false },
  { id: uuidv4(), name: 'Drink  more wotaa!!', complete: false },
  { id: uuidv4(), name: 'Drink  more wotaa!!', complete: true },
  { id: uuidv4(), name: 'Drink  more wotaa!!', complete: false },
]

export const GoalConditions = () => {
  const [conditions, setConditions] = useState<GoalCondition[]>(goalConditions)
  const [solutionAdded, setSolutionAdded] = useState<boolean>(false)
  const [isEditable, setIsEditable] = useState(false)

  const incompleteConditions = conditions.filter(({ complete }) => !complete)
  const completeConditions = conditions.filter(({ complete }) => complete)

  const lastConditionRef = useRef<HTMLElement | null>(null)

  const setLastConditionRef = (el: HTMLElement | null) => {
    if (!el) return

    lastConditionRef.current = el
  }

  const handleConditionChange = (conditionId: string, event: any) => {
    const conditionsCopy = [...conditions]
    const targetConditionIndex = conditionsCopy.findIndex(
      (condition) => condition.id === conditionId,
    )
    conditionsCopy[targetConditionIndex].name = event.target.value

    setConditions(conditionsCopy)
  }

  const handleConditionCheck = (conditionId: string) => {
    const conditionsCopy = [...conditions]
    const targetConditionIndex = conditionsCopy.findIndex(
      (condition) => condition.id === conditionId,
    )

    conditionsCopy[targetConditionIndex].complete = !conditionsCopy[targetConditionIndex].complete

    setConditions(conditionsCopy)
  }

  const addCondition = () => {
    setConditions([{ id: uuidv4(), name: '', complete: false }, ...conditions])
    setSolutionAdded(true)
  }

  const deleteCondition = (condition: GoalCondition) => {
    const conditionsCopy = [...conditions]
    const targetIndex = conditionsCopy.indexOf(condition)

    conditionsCopy.splice(targetIndex, 1)

    setConditions(conditionsCopy)
  }

  const incompleteConditionsInputs = incompleteConditions.map((condition, index) => (
    <ConditionInput
      ref={(ref) => {
        index === 0 && setLastConditionRef(ref)
      }}
      isEditable={isEditable}
      key={condition.id}
      icon={condition.complete ? 'complete' : 'default'}
      condition={condition}
      onChange={(e) => handleConditionChange(condition.id, e)}
      onCheck={(e) => handleConditionCheck(condition.id)}
      onDelete={() => deleteCondition(condition)}
      checked={condition.complete}
    />
  ))

  const completeConditionsInputs = completeConditions.map((condition) => (
    <ConditionInput
      key={condition.id}
      icon={condition.complete ? 'complete' : 'default'}
      condition={condition}
      isEditable={isEditable}
      onChange={(e) => handleConditionChange(condition.id, e)}
      onCheck={(e) => handleConditionCheck(condition.id)}
      onDelete={() => deleteCondition(condition)}
      checked={condition.complete}
    />
  ))

  useEffect(() => {
    if (solutionAdded) {
      lastConditionRef.current?.focus()
      setSolutionAdded(false)
    }
  }, [solutionAdded])

  return (
    <S.GoalConditions>
      <S.GoalConditionsHeader>
        <SettingsButton
          onClick={() => {
            setIsEditable(!isEditable)
          }}
        />
        <span>Conditions</span>
      </S.GoalConditionsHeader>
      <S.GoalConditionsContent
        axis='y'
        style={{ overflowY: 'scroll' }}
        layoutScroll
        values={conditions}
        onReorder={setConditions}
      >
        {incompleteConditionsInputs}
        {completeConditionsInputs}
      </S.GoalConditionsContent>
      <S.AddButton size='medium' onClick={addCondition}>
        <AddRoundedIcon />
      </S.AddButton>
    </S.GoalConditions>
  )
}
