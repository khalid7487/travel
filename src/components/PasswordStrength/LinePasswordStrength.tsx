import React from 'react'
import zxcvbn from 'zxcvbn'

const colorMap = ['#E55050', '#F0B400', '#125B50', '#125B50', '#125B50']

const maxStrength = 4

type PasswordStrength = {
  strength?: number
  isLoading?: boolean
  password: string
}

import {Container, Line, LineWrapper} from './PasswordStrength.styles'

const PasswordStrength = ({strength: strengthOuter, isLoading, password}: PasswordStrength) => {
  const [strength, setStrength] = React.useState(Math.min(maxStrength, strengthOuter))

  React.useEffect(() => {
    if (password) {
      const zxcvbnRes = zxcvbn(password)
      setStrength(Math.min(maxStrength, zxcvbnRes.score))
    }
  }, [password])

  React.useEffect(() => {
    if (strengthOuter) setStrength(Math.min(maxStrength, strengthOuter))
  }, [strengthOuter])

  return (
    <Container isLoading={isLoading}>
      {Array.from({length: strength + 1}, (_, i) => (
        <LineWrapper key={i}>
          <Line color={colorMap[strength]} />
        </LineWrapper>
      ))}
    </Container>
  )
}

export default PasswordStrength
