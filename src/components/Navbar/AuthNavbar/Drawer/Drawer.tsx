import React from 'react'
import {useTranslation} from 'react-i18next'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import {Drawer as MUIDrawer, useMediaQuery, useTheme} from '@mui/material'

import NmsLogo from 'images/nms.png'

import {getMenuItems} from '../../Navbar.config'
import SubMenu from './SubMenu'
import {DrawerHeader, Drawer as DrawerComponent} from '../AuthNavbar.styles'

type DrawerProps = {
  open: boolean
  setOpen: (data: boolean) => void
  setIsClosing: (data: boolean) => void
}

const Drawer = ({open, setOpen, setIsClosing}: DrawerProps) => {
  const theme = useTheme()
  const {t} = useTranslation()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const [isLocked, setIsLocked] = React.useState(false)

  const menuItems = React.useMemo(() => getMenuItems(t), [t])

  const handleDrawerClose = () => {
    if (!isLocked) {
      setOpen(false)
      setIsClosing(true)
    }
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  React.useEffect(() => {
    if (isSmallScreen) {
      setIsLocked(false)
    }
  }, [isSmallScreen])

  return (
    <>
      <DrawerComponent
        variant='permanent'
        open={open}
        onTransitionEnd={() => setIsClosing(false)}
        onMouseEnter={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
        sx={{
          display: {xs: 'none', sm: 'none', md: 'block'},
        }}
      >
        <DrawerHeader open={open}>
          <IconButton color='inherit' aria-label='logo' edge='start'>
            <img src={NmsLogo} height={20} width={30} />
          </IconButton>
          {open && (
            <IconButton
              onClick={() => {
                setIsLocked(prev => !prev)
                handleDrawerOpen()
              }}
            >
              {isLocked ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          )}
        </DrawerHeader>
        <SubMenu items={menuItems} open={open} />
      </DrawerComponent>

      <MUIDrawer
        // container={container}
        variant='temporary'
        open={open}
        onTransitionEnd={() => setIsClosing(false)}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: {xs: 'block', sm: 'block', md: 'none'},
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
          },
        }}
      >
        <SubMenu items={menuItems} open={open} />
      </MUIDrawer>
    </>
  )
}

export default Drawer
