import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const PageWrapper = ({ children, showSignOutButton }) => (
  <StyledPageWrapper>
    <Header showSignOutButton={showSignOutButton} />
    {children}
    <Footer />
  </StyledPageWrapper>
)

export default PageWrapper
