import { useRef, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AddRoundedIcon from '@mui/icons-material/AddRounded'

import { SettingsButton } from '../SettingsButton/SettingsButton'
import { ObstacleInput } from '../ObstaclesInput/ObstacleInput'

import * as S from './styles'

interface GoalObstacle {
  id: string | number
  name: string
  complete: boolean
}

const goalObstacles: GoalObstacle[] = [
  { id: uuidv4(), name: 'Drink  more wotaa!!', complete: true },
  { id: uuidv4(), name: 'Drink even more water', complete: false },
  { id: uuidv4(), name: 'Drink  more wotaa!!', complete: true },
  { id: uuidv4(), name: 'Drink  more wotaa!!', complete: false },
  { id: uuidv4(), name: 'Drink  more wotaa!!', complete: false },
  { id: uuidv4(), name: 'Drink  more wotaa!!', complete: true },
  { id: uuidv4(), name: 'Drink  more wotaa!!', complete: false },
]

export const GoalObstacles = () => {
  const [obstacles, setObstacles] = useState<GoalObstacle[]>(goalObstacles)

  const incompleteObstacles = obstacles.filter(({ complete }) => !complete)
  const completeObstacles = obstacles.filter(({ complete }) => complete)

  const lastObstacleRef = useRef<HTMLElement | null>(null)

  const setLastObstacleRef = (el: HTMLElement | null) => {
    if (!el) return

    lastObstacleRef.current = el
  }

  const handleObstacleChange = (obstacleId: string | number, event: any) => {
    const obstaclesCopy = [...obstacles]
    const targetObstacleIndex = obstaclesCopy.findIndex((obstacle) => obstacle.id === obstacleId)
    obstaclesCopy[targetObstacleIndex].name = event.target.value

    setObstacles(obstaclesCopy)
  }

  const handleObstacleCheck = (obstacleId: string | number) => {
    const obstaclesCopy = [...obstacles]
    const targetObstacleIndex = obstaclesCopy.findIndex((obstacle) => obstacle.id === obstacleId)

    obstaclesCopy[targetObstacleIndex].complete = !obstaclesCopy[targetObstacleIndex].complete

    setObstacles(obstaclesCopy)
  }

  const addObstacle = () => {
    setObstacles([{ id: uuidv4(), name: '', complete: false }, ...obstacles])
  }

  const incompleteObstaclesInputs = incompleteObstacles.map((obstacle, index) => (
    <ObstacleInput
      ref={(ref) => {
        index === 0 && setLastObstacleRef(ref)
      }}
      key={obstacle.id}
      obstacle={obstacle}
      onChange={(e) => handleObstacleChange(obstacle.id, e)}
      onCheck={(e) => handleObstacleCheck(obstacle.id)}
      checked={obstacle.complete}
    />
  ))
  const completeObstaclesInputs = completeObstacles.map((obstacle) => (
    <ObstacleInput
      key={obstacle.id}
      obstacle={obstacle}
      onChange={(e) => handleObstacleChange(obstacle.id, e)}
      onCheck={(e) => handleObstacleCheck(obstacle.id)}
      checked={obstacle.complete}
    />
  ))

  useEffect(() => {
    lastObstacleRef.current?.focus()
  }, [obstacles])

  return (
    <S.GoalObstacles>
      <S.GoalObstaclesHeader>
        <SettingsButton
          onClick={() => {
            return null
          }}
        />
        <span>Obstacles</span>
      </S.GoalObstaclesHeader>
      <S.GoalObstaclesContent
        axis='y'
        style={{ overflowY: 'scroll' }}
        layoutScroll
        values={obstacles}
        onReorder={setObstacles}
      >
        {incompleteObstaclesInputs}
        {completeObstaclesInputs}
      </S.GoalObstaclesContent>
      <S.AddButton size='medium' onClick={addObstacle}>
        <AddRoundedIcon />
      </S.AddButton>
    </S.GoalObstacles>
  )
}
