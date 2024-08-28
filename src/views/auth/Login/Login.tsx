import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import routes from 'routes'
import LoginImage from 'images/login.png'
import AuthBlock, {AuthLeftBlock, AuthRightBlock} from 'components/AuthBlock'

import LoginForm from './LoginForm'

const Login: React.FC = (): React.ReactElement => (
  <AuthBlock>
    <AuthLeftBlock src={LoginImage} />
    <AuthRightBlock>
      <Routes>
        <Route index Component={LoginForm} />

        <Route path='*' element={<Navigate to={routes.notFound.to} replace />} />
      </Routes>
    </AuthRightBlock>
  </AuthBlock>
)

export default Login
