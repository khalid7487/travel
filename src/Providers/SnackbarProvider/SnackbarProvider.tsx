import React from 'react'
import {IconButton} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import {SnackbarProvider as NotistackProvider, useSnackbar} from 'notistack'

interface CloseButtonProps {
  id: string | number
}

interface SnackbarProviderProps {
  children: React.ReactElement
}

const CloseButton: React.FC<CloseButtonProps> = ({id}) => {
  const {closeSnackbar} = useSnackbar()
  return (
    <IconButton size='small' edge='end' color='inherit' onClick={() => closeSnackbar(id)}>
      <CloseIcon />
    </IconButton>
  )
}

const SnackbarProvider: React.FC<SnackbarProviderProps> = ({children}) => (
  <NotistackProvider
    maxSnack={3}
    preventDuplicate
    dense
    action={key => <CloseButton key={key} id={key} />}
  >
    {children}
  </NotistackProvider>
)

export default SnackbarProvider
