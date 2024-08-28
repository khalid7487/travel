import {styled} from '@mui/material/styles'

export const Grid = styled('div')(({theme}) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
  gap: '10px',
  paddingBottom: 30,
  paddingTop: 30,
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  },
}))

// export const Container = styled('div')({

// })
