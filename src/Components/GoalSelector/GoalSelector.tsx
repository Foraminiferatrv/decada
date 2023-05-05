import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import StarIcon from '@mui/icons-material/Star'

import * as S from './styles'

export const GoalSelector = () => {
  return (
    <Box sx={S.GoalSelectorWrapper}>
      <FormControl fullWidth>
        <Select
          id='goal-selector'
          value={'drink-more-water'}
          sx={S.GoalSelector}
          // onChange={handleChange}
        >
          <MenuItem value={'drink-more-water'} sx={S.MenuItem}>
            <StarIcon sx={S.StarIcon} />
            <span>Drink more water</span>
          </MenuItem>
          <MenuItem value={'find-some-sunlight'}>Fight The Sun</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
