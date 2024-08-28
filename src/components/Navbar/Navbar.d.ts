import {ListOwnProps} from '@mui/material'

type BaseMenuItemProps = {
  icon: React.ElementType
  label: string
  to: string
  children?: MenuItemProps[]
}

type MenuItemWithChildren = Omit<BaseMenuItemProps, 'to'> & {
  children: MenuItemProps[]
}

type MenuItemWithoutChildren = Omit<BaseMenuItemProps, 'children'> & {
  to: string
  children?: never
}

export type MenuItemProps = MenuItemWithChildren | MenuItemWithoutChildren

export type SubMenuProps = {
  items: MenuItemProps[]
  open: boolean
} & ListOwnProps
