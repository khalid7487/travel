import React from 'react'
import {Box} from '@mui/material'

import AuthFooter from 'components/Footer/AuthFooter'
import AuthNavbar from 'components/Navbar/AuthNavbar'
import Drawer from 'components/Navbar/AuthNavbar/Drawer'
import {DrawerHeader} from 'components/Navbar/AuthNavbar/AuthNavbar.styles'

type MainLayoutProps = {
  children: React.ReactElement
}

const MainLayout: React.FC<MainLayoutProps> = ({children}): React.ReactElement => {
  const [open, setOpen] = React.useState(false)
  const [isClosing, setIsClosing] = React.useState(false)

  return (
    <Box sx={{display: 'flex'}}>
      <AuthNavbar open={open} isClosing={isClosing} setOpen={setOpen} />
      <Drawer open={open} setOpen={setOpen} setIsClosing={setIsClosing} />
      <div style={{width: '100%'}}>
        <Box sx={{p: 3}}>
          <DrawerHeader />
          {children}
        </Box>
        <AuthFooter />
      </div>
    </Box>
  )
}

export default MainLayout
