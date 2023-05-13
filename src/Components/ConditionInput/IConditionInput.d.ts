interface Condition {
  name: string
  complete: boolean
}

export interface IConditionInputProps {
  icon?: ReactNode | ('complete' | 'default')
  checked?: boolean
  condition: Condition
  isEditable?: boolean
  onChange: (event) => void
  onDelete: () => void
  onCheck: (event) => void
}
