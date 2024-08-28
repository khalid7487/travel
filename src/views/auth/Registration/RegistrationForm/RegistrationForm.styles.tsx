import {styled} from '@mui/material/styles'
import {Typography} from '@mui/material'

import {Form as CoreForm, Button as CoreButton} from '@core'

export const Form = styled(CoreForm)({
  marginTop: 20,
})

export const InputWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 20,
})

export const InputGroup = styled('div')(({theme}) => ({
  display: 'flex',
  columnGap: 15,

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    rowGap: 15,
  },
}))

export const TermsConditionWrapper = styled(Typography)(({theme}) => ({
  margin: 4,
  color: theme.palette.grey[400],
  fontSize: 11,
  fontWeight: 40,
}))

export const ClickableTermsCondition = styled(CoreButton)(({theme}) => ({
  color: theme.palette.grey[400],
  cursor: 'pointer',
  fontWeight: 700,
  fontSize: 11,
  textDecoration: 'underline',
}))
