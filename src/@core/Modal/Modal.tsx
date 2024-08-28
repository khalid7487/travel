import Fade from '@mui/material/Fade'
import Box from '@mui/material/Box'
import React, {ReactNode, CSSProperties} from 'react'

import {
  ModalHeader,
  ModalBody,
  ModalBtnClose,
  ModalTitle,
  ModalContainer,
  ModalStyled,
  OuterDiv,
  BgClose,
  StyledCloseIcon,
} from './Modal.styles'

const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '220px',
}

type ModalProps = {
  isOpened: boolean
  onClose: () => void
  title?: string
  children?: ReactNode
  maxWidth?: string
  textAlign?: string
  className?: string
  style?: CSSProperties
  [key: string]: unknown
}

const Modal: React.FC<ModalProps> = ({
  isOpened,
  onClose,
  title,
  children,
  maxWidth = '400px',
  textAlign = 'left',
  className,
  style,
  ...rest
}) => (
  <ModalStyled
    aria-labelledby='modal-modal-title'
    aria-describedby='modal-modal-description'
    open={isOpened}
    onClose={onClose}
    {...rest}
    sx={{border: 'none'}}
  >
    <Box sx={styles}>
      <Fade timeout={250} in={isOpened}>
        <OuterDiv maxWidth={maxWidth}>
          <BgClose onClick={onClose} />
          <ModalContainer
            maxWidth={maxWidth}
            className={className}
            style={style}
            sx={{textAlign: textAlign}}
          >
            <ModalHeader border={!!title}>
              <ModalTitle>{title}</ModalTitle>
              <ModalBtnClose onClick={onClose}>
                <StyledCloseIcon />
              </ModalBtnClose>
            </ModalHeader>
            <ModalBody border={!!title}>{children}</ModalBody>
          </ModalContainer>
        </OuterDiv>
      </Fade>
    </Box>
  </ModalStyled>
)

export default Modal
