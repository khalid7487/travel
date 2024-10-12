import {styled} from '@mui/material/styles'

import {Form as CoreForm, Link} from '@core'

import {LoginFields} from './LoginForm'

export const Form = styled(CoreForm<LoginFields>)({
  marginTop: 20,
})

export const ForgotPassword = styled(Link)(({theme}) => ({
  textAlign: 'end',
  display: 'block',
  marginTop: 10,
  color: theme.palette.grey[800],
  paddingRight: 0,
  '&:hover': {
    color: theme.palette.grey[900],
  },
}))

export const InputWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 20,
})
