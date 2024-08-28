import {styled} from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'

import {LinkProps} from './Link'

export const Link = styled(RouterLink, {
  shouldForwardProp: prop => prop !== 'startIcon',
})<LinkProps & {startIcon?: React.ReactNode}>(({startIcon}) => ({
  textTransform: 'capitalize',
  textDecoration: 'none',
  ...(startIcon && {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 5,
  }),
  '&:hover': {
    textDecoration: 'underline',
  },
}))
