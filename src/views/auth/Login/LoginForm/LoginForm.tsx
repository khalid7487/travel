import React from 'react'
import * as yup from 'yup'
import {Typography} from '@mui/material'
import {useTranslation} from 'react-i18next'
import {useMutation} from '@tanstack/react-query'
import {useNavigate} from 'react-router-dom'
import type {UseFormReturn} from 'react-hook-form'

import {Input} from '@core'
import routes from 'routes'
import {LoginProps} from 'api/Request'
import {UserApiMethods} from 'api'
import {ApiErrorType} from 'api/ApiError'
import {LoginResponse} from 'api/Response'
import useYupHooks from 'hooks/helpers/useYupHooks'
import useAuthToken from 'hooks/persisted/useAuthToken'
import {AuthButton, AuthDescription, AuthLink} from 'components/AuthBlock'

import {Form, InputWrapper, ForgotPassword} from './LoginFrom.styles'

const schema = yup.object().shape({
  email: yup.string().email().required().label('Email').trim().lowercase(),
  password: yup.string().min(8).required().label('Password').trim(),
})

export type LoginFields = yup.InferType<typeof schema>

const LoginForm: React.FC = (): React.ReactElement => {
  const {t} = useTranslation()
  const navigate = useNavigate()
  const {setAuthToken} = useAuthToken()
  const {setApiError, ...methods} = useYupHooks<LoginFields & UseFormReturn>({schema})

  const {mutate} = useMutation<LoginResponse, ApiErrorType, LoginProps>({
    mutationFn: UserApiMethods.login,
    onSuccess: ({token}: LoginResponse) => {
      setAuthToken(token)
      navigate(routes.home.to)
    },
    onError: setApiError,
  })

  const onSubmit = (data: LoginFields) => mutate(data)

  return (
    <>
      <Typography fontWeight='700' variant='h5'>
        {t('auth.login.title')}
      </Typography>
      <AuthDescription sx={{marginTop: 1}}>
        {t('auth.register.alreadyHaveAccount')}
        <AuthLink to={routes.register.to}>{t('forms.buttons.signUp')}</AuthLink>
      </AuthDescription>
      <Form formMethods={methods} onSubmit={onSubmit}>
        <InputWrapper>
          <Input
            name='email'
            label={t('forms.labels.username')}
            placeholder={t('forms.placeholders.username')}
            required
          />

          <Input
            name='password'
            type='password'
            label={t('forms.labels.password')}
            placeholder={t('forms.placeholders.password')}
            required
          />
        </InputWrapper>

        <ForgotPassword to='#'>{t('forms.buttons.forgotPassword')}</ForgotPassword>

        <AuthButton type='submit' variant='contained'>
          {t('forms.buttons.signIn')}
        </AuthButton>
      </Form>
    </>
  )
}

export default LoginForm
