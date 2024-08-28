import React from 'react'
import {
  DatePicker as MuiDatePicker,
  LocalizationProvider,
  DatePickerProps as MuiDatePickerProps,
} from '@mui/x-date-pickers'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {Controller, useFormContext} from 'react-hook-form'
import {useTranslation} from 'react-i18next'
import dayjs from 'dayjs'
import 'dayjs/locale/en'
import 'dayjs/locale/de'

type DatePickerProps = {
  name: string
} & Omit<MuiDatePickerProps<dayjs.Dayjs>, 'value' | 'onChange'>

const DatePicker: React.FC<DatePickerProps> = ({name, ...rest}) => {
  const {i18n} = useTranslation()
  const {control} = useFormContext()

  React.useEffect(() => {
    dayjs.locale(i18n.language)
  }, [i18n.language])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={i18n.language}>
      <Controller
        name={name}
        control={control}
        render={({field, fieldState}) => (
          <MuiDatePicker
            {...field}
            slotProps={{
              textField: {
                fullWidth: true,
                error: fieldState.invalid,
                helperText: fieldState.error?.message,
                FormHelperTextProps: {
                  style: {
                    marginLeft: '5px',
                    paddingBottom: 0,
                    fontSize: 12,
                  },
                },
              },
            }}
            value={field.value ?? null}
            inputRef={field.ref}
            onChange={date => {
              field.onChange(date)
            }}
            {...rest}
          />
        )}
      />
    </LocalizationProvider>
  )
}

export default DatePicker
