export interface Solution {
  name: string
  complete: boolean
}

export interface ISolutionProps {
  checked?: boolean
  solution: Solution
  isEditable?: boolean
  onChange: (event) => void
  onCheck?: (event) => void
  onDelete: () => void
}
