import React from 'react'
import * as yup from 'yup'
import {Typography} from '@mui/material'
import {useMutation} from '@tanstack/react-query'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'

import routes from 'routes'
import {Input} from '@core'
import {UserApiMethods} from 'api'
import {LoginResponse} from 'api/Response'
import {ApiErrorType} from 'api/ApiError'
import {LoginProps} from 'api/Request'
import useYupHooks from 'hooks/helpers/useYupHooks'
import useAuthToken from 'hooks/persisted/useAuthToken'
import PasswordStrength from 'components/PasswordStrength'
import {AuthButton, AuthLink, AuthDescription} from 'components/AuthBlock'

import {
  Form,
  InputWrapper,
  TermsConditionWrapper,
  ClickableTermsCondition,
} from './RegistrationForm.styles'

const schema = yup.object().shape({
  email: yup.string().email().required().label('Email').trim().lowercase(),
  password: yup.string().min(8).required().label('Password').trim(),
  confirmEmail: yup
    .string()
    .email()
    .required()
    .label('Email confirmation')
    .oneOf([yup.ref('email')], "Email don't match")
    .trim()
    .lowercase(),
  confirmPassword: yup
    .string()
    .required()
    .label('Password confirmation')
    .oneOf([yup.ref('password')], "Password don't match")
    .trim(),
})

export type RegisterFields = yup.InferType<typeof schema>

const RegistrationForm: React.FC = (): React.ReactElement => {
  const {t} = useTranslation()
  const navigate = useNavigate()
  const {setAuthToken} = useAuthToken()
  const {setApiError, ...methods} = useYupHooks<RegisterFields>({schema})

  const {mutate} = useMutation<LoginResponse, ApiErrorType, LoginProps>({
    mutationFn: UserApiMethods.register,
    onSuccess: ({token}: LoginResponse) => {
      setAuthToken(token)
      navigate(routes.home.to)
    },
    onError: setApiError,
  })

  const onSubmit = (data: RegisterFields) => mutate(data)

  return (
    <>
      <Typography fontWeight='700' variant='h5'>
        {t('auth.register.title')}
      </Typography>
      <AuthDescription sx={{marginTop: 1}}>
        {t('auth.register.alreadyHaveAccount')}
        <AuthLink to={routes.login.to}>{t('forms.buttons.signIn')}</AuthLink>
      </AuthDescription>

      <Form formMethods={methods} onSubmit={onSubmit}>
        <InputWrapper>
          <Input
            name='email'
            label={t('forms.labels.email')}
            placeholder={t('forms.placeholders.email')}
            required
          />
          <Input
            name='confirmEmail'
            label={t('forms.labels.confirmEmail')}
            placeholder={t('forms.placeholders.confirmEmail')}
            required
            autoComplete='off'
            onPaste={e => {
              e.preventDefault()
            }}
          />

          <Input
            name='password'
            type='password'
            label={t('forms.labels.password')}
            placeholder={t('forms.placeholders.password')}
            required
          />
          <Input
            name='confirmPassword'
            type='password'
            label={t('forms.labels.confirmPassword')}
            placeholder={t('forms.placeholders.confirmPassword')}
            required
            autoComplete='off'
            onPaste={e => {
              e.preventDefault()
            }}
          />
          <PasswordStrength password={methods.watch('password')} />
        </InputWrapper>

        <AuthButton type='submit' variant='contained'>
          {t('forms.buttons.signUp')}
        </AuthButton>

        <TermsConditionWrapper>
          {t('auth.register.termsCondition')}
          <ClickableTermsCondition>{t('auth.register.terms')}</ClickableTermsCondition>
          {t('auth.register.and')}
          <ClickableTermsCondition>{t('auth.register.privacyPolicy')}</ClickableTermsCondition>
        </TermsConditionWrapper>
      </Form>
    </>
  )
}

export default RegistrationForm
