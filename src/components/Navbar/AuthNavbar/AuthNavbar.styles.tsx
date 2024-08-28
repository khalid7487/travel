import MuiDrawer from '@mui/material/Drawer'
import {styled, Theme, CSSObject, alpha} from '@mui/material/styles'
import {ListItemButton as MuiListItemButton} from '@mui/material'
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar'

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}
interface ListItemButtonProps extends MuiAppBarProps {
  isActive: boolean
}

const drawerWidth = 240

// eslint-disable-next-line react-refresh/only-export-components
export const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

// eslint-disable-next-line react-refresh/only-export-components
export const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9.5)} + 1px)`,
  },
})

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
  width: `calc(100% - ${theme.spacing(9.5)} + 1px)`,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  background: theme.palette.background.default,
  boxShadow: 'none',
  color: theme.palette.text.primary,
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}))

export const DrawerHeader = styled('div')<{open?: boolean}>(({theme, open}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: open ? 'space-between' : 'flex-start',
  padding: theme.spacing(0, 1),
  paddingLeft: 25,
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

export const Drawer = styled(MuiDrawer, {shouldForwardProp: prop => prop !== 'open'})(
  ({theme, open}) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
)

export const ListItemButton = styled(MuiListItemButton, {
  shouldForwardProp: prop => prop !== 'isActive',
})<ListItemButtonProps>(({theme, isActive}) => ({
  color: isActive ? theme.palette.primary.main : theme.palette.text.secondary,
  backgroundColor: isActive ? alpha(theme.palette.primary.light, 0.2) : 'none',
  borderRadius: 5,

  '& .MuiListItemIcon-root': {
    color: isActive ? theme.palette.primary.main : theme.palette.text.secondary,
  },
  '& .css-1dpedc1-MuiTypography-root': {
    fontWeight: '500',
  },

  '&:hover': {
    backgroundColor: isActive
      ? alpha(theme.palette.primary.light, 0.4)
      : theme.palette.action.hover,
  },
}))
