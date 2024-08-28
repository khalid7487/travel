import {Button as MuiButton, styled, type ButtonProps} from '@mui/material'

export const Button = styled(MuiButton)<ButtonProps>(({variant}) => ({
  textTransform: 'capitalize',
  ...(variant === 'text' && {
    '&:hover': {
      textDecoration: 'underline',
      backgroundColor: 'transparent',
    },
  }),
}))
