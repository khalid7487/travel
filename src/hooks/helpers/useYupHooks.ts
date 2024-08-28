import {useCallback} from 'react'
import {AnyObjectSchema} from 'yup'
import {useSnackbar} from 'notistack'
import {yupResolver} from '@hookform/resolvers/yup'
import {type FieldValues, type UseFormProps, type UseFormReturn, useForm} from 'react-hook-form'

import {ApiErrorType} from 'api/ApiError'

export type SetErrorKey = `root.${string}`

type YupHooksProps<T extends FieldValues> = {
  schema: AnyObjectSchema
} & UseFormProps<T>

type UseYupHooksReturns<Tdata extends FieldValues> = {
  setApiError: (props: ApiErrorType) => void
  // }
} & UseFormReturn<Tdata>

const useYupHooks = <Tdata extends FieldValues>({
  mode = 'all',
  schema,
  ...props
}: YupHooksProps<Tdata>): UseYupHooksReturns<Tdata> => {
  const methods = useForm<Tdata>({
    mode,
    resolver: yupResolver(schema),
    ...props,
  })

  const {enqueueSnackbar, closeSnackbar} = useSnackbar()

  const setApiError = useCallback(
    (apiError: ApiErrorType) => {
      if (apiError == null) {
        // reset error
        methods.clearErrors()
        closeSnackbar()
      } else {
        // set errors by name to show under input
        if (apiError.errorsObject)
          Object.entries(apiError.errorsObject).forEach(([key, err]) => {
            const formattedKey = key.includes('.') ? key.split('.')[1] : key

            methods.setError(formattedKey as SetErrorKey, {
              type: 'apiError',
              message: err.toString(),
            })
          })

        // set global message error with all errors
        methods.setError('root', {
          type: 'apiError',
          message: apiError.toString(),
        })

        enqueueSnackbar(apiError.toString(), {
          variant: 'error',
        })
      }
    },
    [closeSnackbar, enqueueSnackbar, methods],
  )

  return {
    setApiError,
    ...methods,
  }
}

export default useYupHooks
