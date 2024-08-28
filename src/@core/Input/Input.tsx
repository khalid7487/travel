import React from 'react'
import {Controller, useFormContext} from 'react-hook-form'
import {IconButton, InputAdornment, TextField, type TextFieldProps} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

type InputProps = {
  name: string
} & TextFieldProps

const InputPassword = React.forwardRef<HTMLDivElement, InputProps>(({type, ...rest}, ref) => {
  const [showPassword, setShowPassword] = React.useState(false)
  return (
    <TextField
      {...rest}
      type={showPassword ? 'text' : type}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={() => setShowPassword(prev => !prev)}
              edge='end'
              disableTouchRipple
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      inputRef={ref}
    />
  )
})

const Input: React.FC<InputProps> = ({name, type, defaultValue, ...rest}) => {
  const {control} = useFormContext()

  const Field = React.useMemo(() => (type === 'password' ? InputPassword : TextField), [type])

  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      render={({field, fieldState}) => (
        <Field
          id={name + Math.random().toString(36).substring(2, 15)}
          type={type}
          error={fieldState.invalid}
          helperText={fieldState.error?.message}
          fullWidth
          FormHelperTextProps={{
            style: {
              marginLeft: '5px',
              paddingBottom: 0,
              fontSize: 12,
            },
          }}
          {...field}
          {...rest}
        />
      )}
    />
  )
}

export default Input
