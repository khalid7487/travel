import React from 'react'

import NonAuthNavbar from 'components/Navbar/NonAuthNavbar'

import {Content} from './Layouts.styles'

type NonAuthLayoutProps = {
  children: React.ReactElement
}

const NonAuthLayout: React.FC<NonAuthLayoutProps> = ({children}): React.ReactElement => (
  <>
    <NonAuthNavbar />
    <Content>{children}</Content>
    {/* <NonAuthFooter /> */}
  </>
)

export default NonAuthLayout
