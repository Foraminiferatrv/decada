export interface Solution {
  name: string
  complete: boolean
}

export interface ISolutionProps {
  checked?: boolean
  solution: Solution
  onChange: (event) => void
  onCheck?: (event) => void
}
