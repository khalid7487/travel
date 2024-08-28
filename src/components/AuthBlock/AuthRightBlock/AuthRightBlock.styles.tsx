import {styled} from '@mui/material'

type WrapperProps = {
  fullWidth?: boolean
}

export const Wrapper = styled('div')<WrapperProps>(({theme, fullWidth}) => ({
  margin: fullWidth ? '90px auto' : 'auto',
  width: '100%',
  maxWidth: fullWidth ? 1270 : 450,
  [theme.breakpoints.down('sm')]: {
    marginTop: 170,
  },
  [theme.breakpoints.between('sm', 'md')]: {
    padding: '0px 20px',
  },
}))
