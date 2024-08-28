import {alpha, styled, Typography} from '@mui/material'

import {Button, Link} from '@core'

export {default as AuthLeftBlock} from './AuthLeftBlock'
export {default as AuthRightBlock} from './AuthRightBlock'

export default styled('div')(({theme}) => ({
  display: 'flex',
  flex: '1 1 auto',
  [theme.breakpoints.down('sm')]: {
    padding: '0px 20px',
  },
}))
export const AuthContent = styled('div')({
  textAlign: 'center',
})

export const AuthDescriptionWrapper = styled('div')({
  margin: '10px 0px 25px',
})

export const AuthDescription = styled(Typography)(({theme}) => ({
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.body2['fontSize'],
  },
}))

export const AuthButton = styled(Button)(({theme}) => ({
  backgroundColor: theme.palette.grey[800],
  width: '100%',
  marginTop: 10,
  '&:hover': {
    backgroundColor: theme.palette.grey[900],
  },
}))

export const AuthBackButton = styled(Link)(({theme}) => ({
  marginTop: '10px',
  color: theme.palette.grey[800],
  '&:hover': {
    color: theme.palette.grey[900],
  },
}))

export const AuthLink = styled(Link)(({theme}) => ({
  color: theme.palette.success.dark,
  cursor: 'pointer',
  fontWeight: 900,
  fontSize: 15,
  '&:hover': {
    textDecoration: 'none',
    color: alpha(theme.palette.success.dark, 0.9),
  },
}))
