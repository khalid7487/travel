import {Container, ContainerInner} from './NonAuthFooter.styles'

const NonAuthFooter = ({...rest}): React.ReactElement => (
  <Container {...rest}>
    <ContainerInner>Copyright Interactive cares ©2024</ContainerInner>
  </Container>
)

export default NonAuthFooter
