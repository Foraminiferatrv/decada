export interface Obstacle {
  name: string
  complete: boolean
}

export interface IObstacleProps {
  checked?: boolean
  obstacle: Obstacle
  onChange: (event) => void
  onCheck?: (event) => void
}
