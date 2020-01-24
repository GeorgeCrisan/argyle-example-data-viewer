import React from 'react'
import styled from 'styled-components'
import NavigateNext from '@material-ui/icons/NavigateNext'
import { withRouter } from 'react-router-dom'

const StyledHeader = styled.div`
  padding: 2.7rem 3rem 0 3rem;
  display: flex;
  justify-content: space-between;
`

const PageName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme, purple }) =>
    purple ? theme.colors.purple : theme.colors.defaultGreen};
  cursor: pointer;
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

const NameWrapper = styled.div`
  display: flex;
`

const StyledNavigateNext = styled(NavigateNext)`
  && {
    color: rgba(0, 0, 0, 0.2);
    width: 18px;
    height: 18px;
    margin: 2px 10px;
  }
`

const UserName = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
`

const Header = ({
  history,
  showSignOutButton = false,
  userName = null,
  purple = false
}) => {
  const signOut = () => {
    localStorage.removeItem('clientID')
    localStorage.removeItem('clientSecret')
    history.push('/sign-in')
  }

  return (
    <StyledHeader>
      <NameWrapper>
        <PageName purple={purple} onClick={() => history.push('/')}>
          DataViewer
        </PageName>
        {userName && (
          <>
            <StyledNavigateNext />
            <UserName>{userName}</UserName>
          </>
        )}
      </NameWrapper>

      {showSignOutButton && (
        <SignOutButton onClick={signOut}>Sign Out</SignOutButton>
      )}
    </StyledHeader>
  )
}

export default withRouter(Header)
