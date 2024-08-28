import {styled} from '@mui/material/styles'

export const Container = styled('div')(({isLoading}: {isLoading?: boolean}) => ({
  display: 'flex',
  margin: '0 -2px',
  transitionDuration: '0.2s',
  opacity: isLoading ? 0.2 : 1,
}))

export const Line = styled('div')(({color}) => ({
  width: '100%',
  height: '3px',
  background: color && color,
}))

export const LineWrapper = styled('div')({
  flex: '0 0 20%',
  width: '20%',
  padding: '0 2px',
})
