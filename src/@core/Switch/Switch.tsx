import React from 'react'

import {StyledSwitch, ItemWrapper, Text, Title, Wrapper} from './Switch.styles'

// Define the types for the props
type Option = {
  id: string
  text: string
}

type SwitchProps = {
  title?: string
  onChange: (value: string) => void
  selected: string
  options: Option[]
}

const Switch: React.FC<SwitchProps> = ({title, onChange, selected, options}) => (
  <Wrapper>
    {title && <Title>{title}</Title>}
    {options &&
      options.map(({id, text}) => (
        <ItemWrapper key={id}>
          <Text>{text}</Text>
          <StyledSwitch
            checked={selected === id}
            value={id}
            onChange={({target}) => {
              onChange(target.value)
            }}
          />
        </ItemWrapper>
      ))}
  </Wrapper>
)

export default Switch
