import {ReactNode, ReactSVGElement} from 'react'

import {
  Box,
  BoxWrapper,
  CardStyles,
  ImgWrapper,
  Text,
  Title,
  BottomWrapper,
  BottomImgWrapper,
  SubTitle,
} from './Card.styles'

type CardProps = {
  isCard?: boolean
  text?: string
  bgColor?: string
  img?: ReactSVGElement | ReactNode
  price?: number | string
  children?: ReactNode
  bottomImg?: ReactSVGElement | ReactNode
  percentage?: number | string
  isIncreased?: boolean
}

const Card = ({
  isCard,
  text,
  bgColor,
  img,
  price,
  children,
  bottomImg,
  percentage,
  isIncreased,
}: CardProps) => {
  if (isCard) return <CardStyles>{children}</CardStyles>
  return (
    <CardStyles>
      <BoxWrapper>
        <Box>
          <Text>{text}</Text>
          <ImgWrapper backgroundColor={bgColor}>{img}</ImgWrapper>
        </Box>
        <Title>${price} </Title>
        {percentage && (
          <BottomWrapper>
            <BottomImgWrapper>{bottomImg}</BottomImgWrapper>

            {isIncreased ? (
              <div>
                <SubTitle>+ {percentage} %</SubTitle>
                <SubTitle>Increase last 7 days</SubTitle>
              </div>
            ) : (
              <div>
                <SubTitle>- {percentage} %</SubTitle>
                <SubTitle>Decreased last 7 days</SubTitle>
              </div>
            )}
          </BottomWrapper>
        )}
      </BoxWrapper>
    </CardStyles>
  )
}

export default Card
