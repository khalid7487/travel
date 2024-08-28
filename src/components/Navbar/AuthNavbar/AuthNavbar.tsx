import React from 'react'
import {useNavigate} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import {Box, Menu, MenuItem, Toolbar, Typography, IconButton, Avatar} from '@mui/material'

import routes from 'routes'
import useAuthToken from 'hooks/persisted/useAuthToken'

import {AppBar} from './AuthNavbar.styles'

type NavbarProps = {
  open: boolean
  isClosing: boolean
  setOpen: (data: boolean) => void
}

const AuthNavbar = ({open, isClosing, setOpen}: NavbarProps) => {
  const {removeAuthToken} = useAuthToken()
  const navigation = useNavigate()

  const handleDrawerToggle = () => {
    if (!isClosing) setOpen(!open)
  }

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

  return (
    <AppBar position='fixed' open={open}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{mr: 2, display: {md: 'none'}}}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap component='div' width={'100%'}>
          Mini variant drawer
        </Typography>

        <Box sx={{flexGrow: 0}}>
          <IconButton onClick={event => setAnchorElUser(event.currentTarget)} sx={{p: 0}}>
            <Avatar alt='khalid' src='/static/images/avatar/1.jpg' />
          </IconButton>

          <Menu
            sx={{mt: '45px', p: 0}}
            id='menu-appbar'
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={() => setAnchorElUser(null)}
          >
            <MenuItem sx={{minWidth: 180}} onClick={() => navigation(routes.profile.to)}>
              <Typography textAlign='center'>Profile</Typography>
            </MenuItem>
            <MenuItem onClick={removeAuthToken}>
              <Typography textAlign='center'>Logout</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default AuthNavbar
