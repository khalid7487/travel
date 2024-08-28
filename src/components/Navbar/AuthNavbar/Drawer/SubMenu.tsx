import React, {useState} from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import {ExpandLess, ExpandMore} from '@mui/icons-material'
import {ListItem, ListItemIcon, ListItemText, Collapse, List, useTheme} from '@mui/material'

import {SubMenuProps} from '../../Navbar'
import {ListItemButton} from '../AuthNavbar.styles'

const SubMenu: React.FC<SubMenuProps> = ({items, open, ...rest}) => {
  const theme = useTheme()
  const location = useLocation()

  const [openSubmenu, setOpenSubmenu] = useState<null | number>(null)

  const handleClick = (index: number) => {
    setOpenSubmenu(openSubmenu === index ? null : index)
  }
  const isActivePath = React.useCallback(
    (path: string) => location.pathname === path,
    [location.pathname],
  )

  return (
    <List sx={{padding: theme.spacing(1)}} {...rest}>
      {items.map(({to, icon: Icon, label, children}, index) => {
        const hasActiveChild = children?.some(child => isActivePath(child.to)) || false

        return (
          <ListItem
            key={label}
            disablePadding
            sx={{display: 'block', marginBottom: theme.spacing(0.5)}}
          >
            {children ? (
              <>
                <ListItemButton onClick={() => handleClick(index)} isActive={hasActiveChild}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={label} sx={{opacity: open ? 1 : 0}} />
                  {open &&
                    (children ? openSubmenu === index ? <ExpandLess /> : <ExpandMore /> : null)}
                </ListItemButton>

                <Collapse
                  in={openSubmenu === index}
                  timeout='auto'
                  unmountOnExit
                  sx={{paddingLeft: 2}}
                >
                  <SubMenu items={children} open={open} sx={{display: !open ? 'none' : ''}} />
                </Collapse>
              </>
            ) : (
              <NavLink
                to={to}
                style={{
                  textDecoration: 'none',
                }}
              >
                {({isActive}) => (
                  <ListItemButton onClick={() => handleClick(index)} isActive={isActive}>
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={label} sx={{opacity: open ? 1 : 0}} />
                  </ListItemButton>
                )}
              </NavLink>
            )}
          </ListItem>
        )
      })}
    </List>
  )
}

export default SubMenu
