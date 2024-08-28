import {styled as MuiStyled} from '@mui/material'

export const Container = MuiStyled('div')(({theme}) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.main,
  // position: 'fixed',
  // bottom: 0,
}))

export const ContainerInner = MuiStyled('div')(({theme}) => ({
  width: '100%',
  height: 50,
  maxWidth: 550,
  display: 'flex',
  alignItems: 'center',
  gap: 25,
  marginBottom: 20,
  [theme.breakpoints.down('md')]: {
    gap: 15,
  },
}))
