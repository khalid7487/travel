import React from 'react'

import {Wrapper, ImageWrapper} from './AuthLeftBlock.styles'

const AuthLeftBlock = ({src}: {src: string}): React.ReactElement => (
  <Wrapper>
    <ImageWrapper>
      <img src={src} width='100%' height='auto' />
    </ImageWrapper>
  </Wrapper>
)

export default AuthLeftBlock
