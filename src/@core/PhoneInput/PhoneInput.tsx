import React, {FC} from 'react'
import {FormHelperText, useTheme} from '@mui/material'
import {Controller, useFormContext} from 'react-hook-form'

import {ReactPhoneInput} from './PhoneInput.styles'

type InputProps = {
  name: string
  label?: string
}

const PhoneInput: FC<InputProps> = ({name, label, ...rest}) => {
  const theme = useTheme()
  const {control} = useFormContext()

  const [isFocused, setIsFocused] = React.useState(false)

  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, value}, fieldState}) => (
        <div style={{width: '100%'}}>
          <ReactPhoneInput
            country={'us'}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            containerStyle={{
              color:
                isFocused && !fieldState.invalid
                  ? theme.palette.primary.main
                  : fieldState.invalid
                    ? theme.palette.error.main
                    : theme.palette.text.secondary,
            }}
            countryCodeEditable={false}
            specialLabel={label}
            value={value}
            enableSearch
            onChange={phone => {
              onChange(phone)
            }}
            isError={fieldState.invalid}
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

export default PhoneInput
