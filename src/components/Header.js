import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

const StyledHeader = styled.div`
  padding: 2.7rem 3rem 0 3rem;
  display: flex;
  justify-content: space-between;
`

const PageName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.defaultGreen};
`

const SignOutButton = styled.button`
  background-color: transparent;
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  cursor: pointer;
  font-weight: 500;
  border: none;
  color: rgba(0, 0, 0, 0.3);

  &:focus {
    outline: none;
  }
`

const Header = ({ showSignOutButton = false, history }) => {
  const signOut = () => {
    localStorage.removeItem('clientID')
    localStorage.removeItem('clientSecret')
    history.push('/sign-in')
  }

  return (
    <StyledHeader>
      <PageName>DataViewer</PageName>
      {showSignOutButton && (
        <SignOutButton onClick={signOut}>Sign Out</SignOutButton>
      )}
    </StyledHeader>
  )
}

export default withRouter(Header)
