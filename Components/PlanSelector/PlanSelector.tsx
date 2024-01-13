import Box from '@mui/material/Box'
// import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

// import type { SelectChangeEvent } from '@mui/material/Select'

import * as S from './styles'

export const PlanSelector = () => {
  // const handleChange = (event: SelectChangeEvent) => {}

  return (
    <Box sx={S.PlanSelectorWrapper}>
      <FormControl fullWidth>
        <Select
          id='plan-selector'
          value={'year-plan'}
          sx={S.PlanSelector}
          // onChange={handleChange}
        >
          <MenuItem value={'year-plan'}>Year Plan</MenuItem>
          <MenuItem value={'month-plan'}>Month Plan</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
