import React from 'react'
import {Settings} from '@mui/icons-material'

import {Container, ContainerInner} from './AuthFooter.styles'

const AuthFooter = ({...rest}): React.ReactElement => (
  <Container {...rest}>
    <ContainerInner>
      <Settings />
      Copyright Khansoft ©2024
    </ContainerInner>
  </Container>
)

export default AuthFooter
