import {styled} from '@mui/material/styles'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

export const Wrapper = styled('button')({
  appearance: 'none',
  background: 'none',
  border: 0,
  padding: 0,
  cursor: 'pointer',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'inherit',
})

export const CopyIcon = styled(ContentCopyIcon)({
  display: 'inline-block',
  transitionDuration: '150ms',
  color: 'inherit',
  fill: 'currentColor',
})
