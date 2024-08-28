import React from 'react'
import {
  Autocomplete as MuiAutocomplete,
  TextField,
  type AutocompleteProps as MuiAutocompleteProps,
} from '@mui/material'
import {Controller, useFormContext} from 'react-hook-form'

type AutocompleteOption = {label: string; value: string | number | boolean}

type AutocompleteProps = {
  name: string
  options: AutocompleteOption[]
  label?: string
  placeholder?: string
} & Omit<MuiAutocompleteProps<AutocompleteOption, false, false, false>, 'renderInput'>

const Autocomplete: React.FC<AutocompleteProps> = ({
  name,
  options,
  defaultValue,
  disabled,
  label,
  placeholder,
  ...rest
}) => {
  const {control} = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || null}
      render={({field, fieldState: {error}}) => {
        const {onChange, disabled: fieldDisabled, onBlur, ref} = field

        return (
          <MuiAutocomplete
            ref={ref}
            disabled={fieldDisabled}
            onBlur={onBlur}
            options={options}
            onChange={(_, newValue) => {
              onChange(newValue?.value)
            }}
            fullWidth
            renderInput={params => (
              <TextField
                {...params}
                label={label}
                placeholder={placeholder}
                error={!!error}
                helperText={error ? error.message : null}
                disabled={disabled}
                FormHelperTextProps={{
                  style: {
                    marginLeft: '5px',
                    paddingBottom: 0,
                    fontSize: 12,
                  },
                }}
              />
            )}
            {...rest}
          />
        )
      }}
    />
  )
}

export default Autocomplete
