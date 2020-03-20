import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  padding: 2.7rem 3rem 0 3rem;
`

const PageName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #40ac74;
`

const Header = () => (
  <StyledHeader>
    <PageName>DataViewer</PageName>
  </StyledHeader>
)

export default Header
