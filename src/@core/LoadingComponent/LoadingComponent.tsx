import {Container, AnimatedCircle} from './LoadingComponent.styles'

const LoadingComponent = ({
  styles,
  isAbsolute,
  ...props
}: {
  styles?: object
  isAbsolute?: boolean
}) => (
  <Container isAbsolute={isAbsolute} style={styles} {...props}>
    <AnimatedCircle />
    <AnimatedCircle />
    <AnimatedCircle />
  </Container>
)

export default LoadingComponent
