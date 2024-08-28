import {TFunction} from 'i18next'
import MailIcon from '@mui/icons-material/Mail'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import PersonIcon from '@mui/icons-material/Person'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import routes from 'routes'

import {MenuItemProps} from './Navbar'

export const getMenuItems = (t: TFunction): MenuItemProps[] =>
  [
    {
      label: t('navigation.sidebarMenu.dashboard'),
      icon: InboxIcon,
      to: routes.home.to,
    },
    {
      label: 'Inbox',
      icon: InboxIcon,
      children: [
        {
          label: 'Test Copy',
          icon: MailIcon,
          to: routes.test.to,
        },
        {
          label: 'Test 1',
          icon: MailIcon,
          to: routes.test1.to,
        },
      ],
    },
    {
      label: 'User',
      icon: PersonIcon,
      children: [
        {
          label: 'My Profile',
          icon: AccountCircleIcon,
          to: routes.profile.to,
        },
        {
          label: 'Test 1',
          icon: MailIcon,
          to: routes.test1.to,
        },
      ],
    },
    {
      label: 'Test 3',
      icon: MailIcon,
      to: routes.test2.to,
    },
  ] as const
