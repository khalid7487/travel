import {styled} from '@mui/material/styles'

export const Wrapper = styled('div')(({theme}) => ({
  background: theme.palette.grey[200],
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

export const ImageWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
})
