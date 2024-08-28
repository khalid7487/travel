import {styled, keyframes, alpha} from '@mui/material/styles'
import Box from '@mui/material/Box'

export const Container = styled(Box, {shouldForwardProp: props => props !== 'isAbsolute'})(
  ({isAbsolute}: {isAbsolute?: boolean}) => ({
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    ...(isAbsolute && {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }),
  }),
)

const loadingAnimation = (bgColor: string) => keyframes`
  0% {
    background-color: ${alpha(bgColor, 0.9)};
    transform: scale(1);
  }
  30% {
    transform: scale(1.3) translateY(0px);
  }
  40% {
    background-color: ${bgColor};
  }
  60% {
    transform: scale(1);
  }
  70% {
    background-color: ${alpha(bgColor, 0.6)};
  }
  100% {
    background-color: ${alpha(bgColor, 0.9)};
    transform: scale(1);
  }
`

export const AnimatedCircle = styled(Box)(({theme}) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  boxShadow: `0 0 3px ${alpha(theme.palette.primary.main, 0.9)}`,
  background: theme.palette.primary.main,
  marginRight: 8,
  animation: `${loadingAnimation(theme.palette.primary.main)} infinite linear 600ms`,
  '&:last-child': {
    marginRight: 0,
  },
  '&:nth-of-type(2)': {
    animationDelay: '100ms',
  },
  '&:nth-of-type(3)': {
    animationDelay: '200ms',
  },
  '&:nth-of-type(4)': {
    animationDelay: '300ms',
  },
}))
