import React from 'react'
import {type ButtonProps} from '@mui/material'

import {Button as MuiButton} from './Button.styles'

const Button: React.FC<ButtonProps> = (props): React.ReactElement => (
  <MuiButton disableElevation disableRipple {...props} />
)

export default Button
