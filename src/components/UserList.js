import React from 'react'
import styled from 'styled-components'
import { Card, Elevation } from '@blueprintjs/core'
import { withRouter } from 'react-router-dom'
import Spinner from './Spinner'

const StyledUserList = styled.div`
  margin: 10rem auto;
  max-width: 60rem;
`

const TopNavigation = styled.div`
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 3px -1px 33px -5px rgba(0, 0, 0, 0.12);
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const SignOutButton = styled.button`
  margin-right: 2rem;
  padding: 1rem 2rem;
  border-radius: 4px;
  background-color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

const StyledCard = styled.a`
  margin-bottom: 2rem;
  display: block;
`

const Details = styled.div`
  display: flex;
  align-items: center;
`

const Text = styled.div`
  display: flex;
  align-items: center;
`

const Name = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  text-decoration: none;
  font-size: 2.4rem;
  font-weight: bold;
  margin-right: 2rem;
`

const Title = styled.h1`
  font-size: 2.4rem;
  margin-right: 1rem;
`

const Link = styled.a`
  font-size: 2.4rem;
  display: block;
`

const StyledSpinner = styled.div`
  min-height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UserList = ({ users, history }) => {
  return (
    <StyledUserList>
      <TopNavigation>
        <div></div>
        <Content>
          <Title>Share this link to connect:</Title>
          <Link
            href="https://argyle-deep-dive.firebaseapp.com/start"
            target="_blank"
          >
            https://argyle-deep-dive.firebaseapp.com/start
          </Link>
        </Content>
        <SignOutButton
          onClick={() => {
            localStorage.removeItem('userToken')
            history.push('/sign-in')
          }}
        >
          Sign Out
        </SignOutButton>
      </TopNavigation>

      {users.length ? (
        users.map(user => (
          <StyledCard
            href={`/user-data/${user.userId}/profiles`}
            key={user.userId + user.email}
          >
            <Card interactive={true} elevation={Elevation.TWO}>
              <Details>
                <Text>
                  <Name>{user.email}</Name>
                </Text>
              </Details>
            </Card>
          </StyledCard>
        ))
      ) : (
        <StyledSpinner>
          <Spinner />
        </StyledSpinner>
      )}
    </StyledUserList>
  )
}

export default withRouter(UserList)
