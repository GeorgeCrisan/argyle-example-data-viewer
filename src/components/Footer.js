import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  margin-top: auto;
  padding: 0 3rem 2.8rem 3rem;
`

const Text = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.3);
`

const BoldText = styled.span`
  color: rgba(0, 0, 0, 0.4);
`

const Footer = () => (
  <StyledFooter>
    <Text>
      {`Powered by `}
      <BoldText>Argyle</BoldText>
    </Text>
  </StyledFooter>
)

export default Footer
