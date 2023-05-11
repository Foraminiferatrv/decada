interface Condition {
  name: string
  complete: boolean
}

export interface IConditionInputProps {
  icon?: ReactNode | ('complete' | 'default')
  checked?: boolean
  condition: Condition
  onChange: (event) => void
  onCheck?: (event) => void
}
