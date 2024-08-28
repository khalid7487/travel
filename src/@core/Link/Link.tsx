import React from 'react'
import {LinkProps as RouterLinkProps} from 'react-router-dom'

import {Link as RouterLink} from './Link.styles'

export type LinkProps = {
  text?: string
  startIcon?: React.ReactNode
} & RouterLinkProps

const Link: React.FC<LinkProps> = ({startIcon, text, children, ...rest}): React.ReactElement => (
  <RouterLink startIcon={startIcon} {...(rest as RouterLinkProps)}>
    {startIcon && startIcon}
    {text || children}
  </RouterLink>
)

export default Link
