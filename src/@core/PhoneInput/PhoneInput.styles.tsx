import PhoneInput, {type PhoneInputProps} from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import {styled} from '@mui/material/styles'

type ReactPhoneInputProps = {
  isError?: boolean
} & PhoneInputProps

export const ReactPhoneInput = styled(PhoneInput)<ReactPhoneInputProps>(({theme, isError}) => ({
  '& .form-control': {
    width: '100%',
    borderColor: isError ? theme.palette.error.main : undefined,

    '&:hover': {
      borderColor: isError ? theme.palette.error.main : undefined,
    },

    '&:focus': {
      border: `2px solid ${isError ? theme.palette.error.main : theme.palette.primary.main}`,
      outline: 'none',
      boxShadow: 'none',
    },
  },
}))
