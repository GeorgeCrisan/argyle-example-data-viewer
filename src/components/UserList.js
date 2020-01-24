import React from 'react'
import styled from 'styled-components'
import { InputGroup, Button, Icon, Card, Elevation } from '@blueprintjs/core'

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

const StyledImg = styled.img`
  margin-right: 3rem;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`

const ImgPlaceholder = styled.div`
  margin-right: 3rem;
  width: 30px;
  height: 30px;
  background-color: lightgray;
  border-radius: 50%;
`

const UserList = ({ users }) => {
  return (
    <StyledUserList>
      {users.map(user => (
        <StyledCard href={`/reports/${user.id}`} key={user.id + user.firstName}>
          <Card interactive={true} elevation={Elevation.TWO}>
            <Details>
              {user.imgUrl ? (
                <StyledImg src={user.imgUrl} />
              ) : (
                <ImgPlaceholder />
              )}

              <Text>
                <Name>{user.firstName}</Name>
                <Name>{user.lastName}</Name>
              </Text>
            </Details>
          </Card>
        </StyledCard>
      ))}
    </StyledUserList>
  )
}

export default UserList
