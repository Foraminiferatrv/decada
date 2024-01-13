import { mainPalette } from '../../app/styles/constants'

export const GoalSelectorWrapper = {
  width: '250px',
  textAlign: 'center',
  fontFamily: 'Roboto Flex',
}

export const GoalSelector = {
  height: 33,

  borderRadius: '4px',

  backgroundColor: '#F2F2F2',
  '*': { border: 'none', display: 'flex', alignItems: 'center' },
}

export const MenuItem = {
  display: 'flex',
  alignItems: 'center',
}

export const StarIcon = {
  marginRight: '5px',

  color: mainPalette[800],
  stroke: mainPalette[900],
}
