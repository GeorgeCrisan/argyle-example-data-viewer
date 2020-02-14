import React from 'react'
import styled from 'styled-components'
import { InputGroup, Button, Card, Elevation } from '@blueprintjs/core'

const StyledUserDetails = styled.div`
  margin: 10rem auto;
  max-width: 60rem;
`

const Title = styled.h1`
  margin-bottom: 3rem;
  color: #0f6ba3;
  font-weight: 500;
`

const StyledInput = styled(InputGroup)`
  margin-bottom: 3rem;
`

const StyledButton = styled(Button)``

const UserDetails = ({ onInputChange, email, password, onSubmit }) => (
  <StyledUserDetails>
    <Card interactive={true} elevation={Elevation.TWO}>
      <form onSubmit={onSubmit}>
        <Title>Sign In</Title>
        <StyledInput
          disabled={false}
          large={true}
          placeholder="Email"
          small={false}
          onChange={onInputChange}
          value={email}
          name="email"
        />
        <StyledInput
          disabled={false}
          large={true}
          placeholder="Password"
          small={false}
          onChange={onInputChange}
          value={password}
          name="password"
          type="password"
        />
        <StyledButton type="submit" onClick={onSubmit} intent="primary">
          Sign in
        </StyledButton>
      </form>
    </Card>
  </StyledUserDetails>
)

export default UserDetails
