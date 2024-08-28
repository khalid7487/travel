import React from 'react'

import {Wrapper} from './AuthRightBlock.styles'

type AuthRightBlockProps = {
  children: React.ReactElement
  fullWidth?: boolean
}

const AuthRightBlock: React.FC<AuthRightBlockProps> = ({
  children,
  fullWidth,
  ...rest
}): React.ReactElement => (
  <Wrapper fullWidth={fullWidth} {...rest}>
    {children}
  </Wrapper>
)

export default AuthRightBlock
