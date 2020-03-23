import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const PageWrapper = ({ children }) => (
  <StyledPageWrapper>
    <Header />
    {children}
    <Footer />
  </StyledPageWrapper>
)

export default PageWrapper
