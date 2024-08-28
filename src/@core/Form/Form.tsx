import {ReactNode} from 'react'
import {
  type FieldValues,
  FormProvider,
  type UseFormReturn,
  type SubmitHandler,
} from 'react-hook-form'

import {FormStyled} from './Form.styles'

type FormProps<Tdata extends FieldValues> = {
  children: ReactNode
  formMethods: UseFormReturn<Tdata>
  onSubmit: SubmitHandler<Tdata>
  style?: React.CSSProperties
}

const Form = <Tdata extends FieldValues>({
  children,
  onSubmit,
  formMethods,
  ...rest
}: FormProps<Tdata>): React.ReactElement => {
  const form = (
    <FormStyled noValidate onSubmit={formMethods.handleSubmit(onSubmit)} {...rest}>
      {children}
    </FormStyled>
  )
  if (formMethods) return <FormProvider {...formMethods}>{form}</FormProvider>
  return form
}

export default Form
