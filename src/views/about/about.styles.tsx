import {styled} from '@mui/material/styles'

export const Grid = styled('div')(({theme}) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '10px',
  paddingBottom: 30,
  paddingTop: 30,
  [theme.breakpoints.down('xs')]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  },
}))
