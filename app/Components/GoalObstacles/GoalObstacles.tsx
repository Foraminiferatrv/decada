'use client'

import { useEffect, useRef, useState } from 'react'

import AddRoundedIcon from '@mui/icons-material/AddRounded'
import { v4 as uuidv4 } from 'uuid'

import { ObstacleInput } from '../ObstaclesInput/ObstacleInput'
import { SettingsButton } from '../SettingsButton/SettingsButton'
import S from './styles.module.scss'
import { Reorder } from 'framer-motion'
import { Fab } from '@mui/material'

interface GoalObstacle {
  id: string
  name: string
  complete: boolean
}

const goalObstacles: GoalObstacle[] = [
  { id: uuidv4(), name: 'Drink  more water.', complete: true },
  { id: uuidv4(), name: 'Drink even more water!', complete: false },
  { id: uuidv4(), name: 'Drink  more wotaa!!', complete: true },
  { id: uuidv4(), name: 'Drink  more wotaa!!', complete: false },
  { id: uuidv4(), name: 'Drink  more wotaa!!', complete: false },
  { id: uuidv4(), name: 'Drink  more wotaa!!', complete: true },
  { id: uuidv4(), name: 'Drink  more wotaa!!', complete: false },
]

export const GoalObstacles = () => {
  const [obstacles, setObstacles] = useState<GoalObstacle[]>(goalObstacles)
  const [obstacleAdded, setObstacleAdded] = useState<boolean>(false)

  const [isEditable, setIsEditable] = useState(false)

  const incompleteObstacles = obstacles.filter(({ complete }) => !complete)
  const completeObstacles = obstacles.filter(({ complete }) => complete)

  const lastObstacleRef = useRef<HTMLElement | null>(null)

  const setLastObstacleRef = (el: HTMLElement | null) => {
    if (!el) return

    lastObstacleRef.current = el
  }

  const handleObstacleChange = (obstacleId: string, event: any) => {
    const obstaclesCopy = [...obstacles]
    const targetObstacleIndex = obstaclesCopy.findIndex((obstacle) => obstacle.id === obstacleId)
    obstaclesCopy[targetObstacleIndex].name = event.target.value

    setObstacles(obstaclesCopy)
  }

  const handleObstacleCheck = (obstacleId: string) => {
    const obstaclesCopy = [...obstacles]
    const targetObstacleIndex = obstaclesCopy.findIndex((obstacle) => obstacle.id === obstacleId)

    obstaclesCopy[targetObstacleIndex].complete = !obstaclesCopy[targetObstacleIndex].complete

    setObstacles(obstaclesCopy)
  }

  const addObstacle = () => {
    setObstacles([{ id: uuidv4(), name: '', complete: false }, ...obstacles])
    setObstacleAdded(true)
  }

  const deleteObstacles = (obstacle: GoalObstacle) => {
    const obstaclesCopy = [...obstacles]

    const targetIndex = obstaclesCopy.indexOf(obstacle)

    obstaclesCopy.splice(targetIndex, 1)

    setObstacles(obstaclesCopy)
  }

  const incompleteObstaclesInputs = incompleteObstacles.map((obstacle, index) => (
    <ObstacleInput
      ref={(ref) => {
        // index === 0 && setLastObstacleRef(ref)
      }}
      isEditable={isEditable}
      key={obstacle.id}
      obstacle={obstacle}
      onChange={(e) => handleObstacleChange(obstacle.id, e)}
      onCheck={(e) => handleObstacleCheck(obstacle.id)}
      onDelete={() => deleteObstacles(obstacle)}
      checked={obstacle.complete}
    />
  ))
  const completeObstaclesInputs = completeObstacles.map((obstacle) => (
    <ObstacleInput
      key={obstacle.id}
      obstacle={obstacle}
      isEditable={isEditable}
      onChange={(e) => handleObstacleChange(obstacle.id, e)}
      onDelete={() => deleteObstacles(obstacle)}
      onCheck={(e) => handleObstacleCheck(obstacle.id)}
      checked={obstacle.complete}
    />
  ))

  useEffect(() => {
    if (setObstacleAdded) {
      lastObstacleRef.current?.focus()
      setObstacleAdded(false)
    }
  }, [obstacleAdded])

  return (
    <section className={S.GoalObstacles}>
      <div className={S.GoalObstaclesHeader}>
        <SettingsButton
          onClick={() => {
            setIsEditable(!isEditable)
          }}
        />
        <span>Obstacles</span>
      </div>
      <Reorder.Group
        className={S.GoalObstaclesContent}
        axis='y'
        style={{ overflowY: 'scroll' }}
        layoutScroll
        values={obstacles}
        onReorder={setObstacles}
      >
        {incompleteObstaclesInputs}
        {completeObstaclesInputs}
      </Reorder.Group>
      <Fab className={S.AddButton} size='medium' onClick={addObstacle}>
        <AddRoundedIcon />
      </Fab>
    </section>
  )
}
