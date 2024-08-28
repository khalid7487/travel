import React from 'react'
import {Controller, useFormContext} from 'react-hook-form'
import {FormHelperText} from '@mui/material'
import {type MuiOtpInputProps, MuiOtpInput} from 'mui-one-time-password-input'

type InputProps = {
  name: string
} & MuiOtpInputProps

const InputOtp: React.FC<InputProps> = ({name, ...rest}): React.ReactElement => {
  const {control} = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({field, fieldState}) => (
        <div>
          <MuiOtpInput
            id={name + Math.random().toString(36).substring(2, 15)}
            {...field}
            {...rest}
          />
          {fieldState.invalid ? (
            <FormHelperText
              sx={{
                marginLeft: '5px',
                paddingBottom: 0,
                fontSize: 12,
              }}
              error
            >
              {fieldState.error?.message}
            </FormHelperText>
          ) : null}
        </div>
      )}
    />
  )
}

export default InputOtp
