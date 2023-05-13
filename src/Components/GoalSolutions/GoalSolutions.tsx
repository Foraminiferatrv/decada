import { useEffect, useRef, useState } from 'react'

import AddRoundedIcon from '@mui/icons-material/AddRounded'
import { v4 as uuidv4 } from 'uuid'

import { SettingsButton } from '../SettingsButton/SettingsButton'
import { SolutionInput } from '../SolutionInput/SolutionInput'
import * as S from './styles'

interface GoalSolution {
  id: string | number
  name: string
  complete: boolean
}

const goalSolutions: GoalSolution[] = [
  { id: uuidv4(), name: 'Drink  more wotaa!!', complete: true },
  { id: uuidv4(), name: 'Drink even more water', complete: false },
  { id: uuidv4(), name: 'Drink  more wotaa!!', complete: true },
  { id: uuidv4(), name: 'Drink  more wotaa!!', complete: false },
  { id: uuidv4(), name: 'Drink  more wotaa!!', complete: false },
  { id: uuidv4(), name: 'Drink  more wotaa!!', complete: true },
  { id: uuidv4(), name: 'Drink  more wotaa!!', complete: false },
]

export const GoalSolutions = () => {
  const [solutions, setSolutions] = useState<GoalSolution[]>(goalSolutions)
  const [solutionAdded, setSolutionAdded] = useState(false)
  const [isEditable, setIsEditable] = useState(false)

  const incompleteSolutions = solutions.filter(({ complete }) => !complete)
  const completeSolutions = solutions.filter(({ complete }) => complete)

  const lastSolutionRef = useRef<HTMLElement | null>(null)

  const setLastSolutionRef = (el: HTMLElement | null) => {
    if (!el) return

    lastSolutionRef.current = el
  }

  const handleSolutionChange = (solutionId: string | number, event: any) => {
    const solutionsCopy = [...solutions]
    const targetSolutionIndex = solutionsCopy.findIndex((solution) => solution.id === solutionId)
    solutionsCopy[targetSolutionIndex].name = event.target.value

    setSolutions(solutionsCopy)
  }

  const handleSolutionCheck = (solutionId: string | number) => {
    const solutionsCopy = [...solutions]
    const targetSolutionIndex = solutionsCopy.findIndex((solution) => solution.id === solutionId)

    solutionsCopy[targetSolutionIndex].complete = !solutionsCopy[targetSolutionIndex].complete

    setSolutions(solutionsCopy)
  }

  const addSolution = () => {
    setSolutions([{ id: uuidv4(), name: '', complete: false }, ...solutions])
    setSolutionAdded(true)
  }

  const deleteSolution = (solution: GoalSolution) => {
    const solutionsCopy = [...solutions]
    const targetIndex = solutionsCopy.indexOf(solution)

    solutionsCopy.splice(targetIndex, 1)

    setSolutions(solutionsCopy)
  }

  const incompleteSolutionsInputs = incompleteSolutions.map((solution, index) => (
    <SolutionInput
      ref={(ref) => {
        index === 0 && setLastSolutionRef(ref)
      }}
      key={solution.id}
      solution={solution}
      isEditable={isEditable}
      onChange={(e) => handleSolutionChange(solution.id, e)}
      onCheck={(e) => handleSolutionCheck(solution.id)}
      onDelete={() => deleteSolution(solution)}
      checked={solution.complete}
    />
  ))
  const completeSolutionsInputs = completeSolutions.map((solution) => (
    <SolutionInput
      key={solution.id}
      solution={solution}
      isEditable={isEditable}
      onChange={(e) => handleSolutionChange(solution.id, e)}
      onCheck={(e) => handleSolutionCheck(solution.id)}
      onDelete={() => deleteSolution(solution)}
      checked={solution.complete}
    />
  ))

  useEffect(() => {
    if (solutionAdded) {
      lastSolutionRef.current?.focus()
      setSolutionAdded(false)
    }
  }, [solutionAdded])

  return (
    <S.GoalSolutions>
      <S.GoalSolutionsHeader>
        <SettingsButton
          onClick={() => {
            setIsEditable(!isEditable)
          }}
        />
        <span>Solutions</span>
      </S.GoalSolutionsHeader>
      <S.GoalSolutionsContent
        axis='y'
        style={{ overflowY: 'scroll' }}
        layoutScroll
        values={solutions}
        onReorder={setSolutions}
      >
        {incompleteSolutionsInputs}
        {completeSolutionsInputs}
      </S.GoalSolutionsContent>
      <S.AddButton size='medium' onClick={addSolution}>
        <AddRoundedIcon />
      </S.AddButton>
    </S.GoalSolutions>
  )
}
