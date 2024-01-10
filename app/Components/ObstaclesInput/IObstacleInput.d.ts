export interface Obstacle {
  name: string
  complete: boolean
}

export interface IObstacleProps {
  checked?: boolean
  obstacle: Obstacle
  isEditable?: boolean
  onDelete: () => void
  onChange: (event) => void
  onCheck?: (event) => void
}
