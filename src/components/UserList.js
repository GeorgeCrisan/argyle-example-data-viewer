import React from 'react'
import styled from 'styled-components'
import { Card, Elevation } from '@blueprintjs/core'
import Spinner from './Spinner'

const StyledUserList = styled.div`
  margin: 10rem auto;
  max-width: 60rem;
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

const TitleBlock = styled.div``

const Title = styled.h1`
  font-size: 3.6rem;
  margin-bottom: 1rem;
`

const Link = styled.a`
  font-size: 2.4rem;
  display: block;
  margin-bottom: 3rem;
`

const StyledSpinner = styled.div`
  min-height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UserList = ({ users }) => {
  return (
    <StyledUserList>
      <TitleBlock>
        <Title>Share this link to connect:</Title>
        <Link
          href="https://argyle-deep-dive.firebaseapp.com/start"
          target="_blank"
        >
          https://argyle-deep-dive.firebaseapp.com/start
        </Link>
      </TitleBlock>
      {users.length ? (
        users.map(user => (
          <StyledCard href={`/reports/${user.id}`} key={user.id + user.email}>
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

export default UserList
