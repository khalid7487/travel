import React from 'react'
import {Routes, Route} from 'react-router-dom'

import LoginImage from 'images/login.png'
import AuthBlock, {AuthLeftBlock, AuthRightBlock} from 'components/AuthBlock'

// import routes from 'routes'
import RegistrationForm from './RegistrationForm'

const Registration: React.FC = (): React.ReactElement => (
  <AuthBlock>
    <AuthLeftBlock src={LoginImage} />
    <AuthRightBlock>
      <Routes>
        <Route index Component={RegistrationForm} />
      </Routes>
    </AuthRightBlock>
  </AuthBlock>
)

export default Registration
