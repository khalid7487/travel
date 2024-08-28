import {Modal} from '@mui/material'
import {styled} from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'

const paddingHorizontal = '25px'
const paddingHorizontalMobile = '15px'

type ModalContainerProps = {
  maxWidth?: string
}

type ModalHeaderProps = {
  border?: boolean
}

export const ModalStyled = styled(Modal)({
  //   position: 'relative',
  overflow: 'auto',
})

export const OuterDiv = styled('div')<ModalContainerProps>(({theme, maxWidth}) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  outline: 'none',
  flexDirection: 'column',
  // padding: 'calc(70px + 15px) 15px 15px',
  minHeight: '100%',
  maxWidth: maxWidth ?? 'auto',
  minWidth: 550,
  [theme.breakpoints.down('sm')]: {
    minWidth: 300,
  },
}))

export const BgClose = styled('div')({
  height: '100%',
  width: '100%',
  zIndex: 0,
  position: 'fixed',
  top: 0,
  left: 0,
})

export const ModalContainer = styled('div')<ModalContainerProps>(({theme, maxWidth}) => ({
  position: 'relative',
  outline: 'none',
  zIndex: 1,
  maxWidth: maxWidth ?? 'auto',
  // textAlign: $textAlign,
  width: '100%',
  border: 'none',
  // border: `1px solid ${theme.palette.divider}`,
  color: theme.palette.common.black,
  background: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.05)',

  [theme.breakpoints.down('xs')]: {
    minWidth: 'auto',
    width: '100%',
  },
}))

export const ModalHeader = styled('div')<ModalHeaderProps>(({theme, border}) => ({
  minHeight: border ? '58px' : '40px',
  padding: `15px 30px 15px ${paddingHorizontal}`,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',

  [theme.breakpoints.down('xs')]: {
    padding: `10px 35px 10px ${paddingHorizontalMobile}`,
  },
}))

export const ModalTitle = styled('span')({
  flex: 1,
  textTransform: 'capitalize',
  fontWeight: 600,
  lineHeight: 1.1,
  fontSize: 18,
})

export const ModalBody = styled('div')<ModalHeaderProps>(({theme, border}) => ({
  padding: border ? `15px ${paddingHorizontal} 15px` : `0px ${paddingHorizontal}`,
  fontSize: theme.typography.body2.fontSize,
  minHeight: border ? '120px' : '0px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  [theme.breakpoints.down('xs')]: {
    padding: `20px ${paddingHorizontalMobile}`,
  },
}))

export const ModalBtnClose = styled('button')(({theme}) => ({
  appearance: 'none',
  border: 'none',
  padding: '5px',
  margin: 0,
  background: 'none',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  right: '10px',
  cursor: 'pointer',
  color: theme.palette.common.black,
  [theme.breakpoints.down('xs')]: {
    right: '5px',
  },
}))

export const StyledCloseIcon = styled(CloseIcon)({
  fill: 'currentColor',
  width: 20,
  height: 20,
})
