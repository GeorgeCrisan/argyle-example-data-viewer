import React from 'react'
import styled from 'styled-components'
import {
  InputGroup,
  Button,
  Icon,
  Card,
  Elevation,
  FileInput
} from '@blueprintjs/core'

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

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HiddenInput = styled.input`
  display: none;
`

const StyledButton = styled(Button)``

const UserDetails = ({ onAddImage }) => (
  <StyledUserDetails>
    <Card interactive={true} elevation={Elevation.TWO}>
      <Title>The Client name</Title>
      <StyledInput
        disabled={false}
        large={true}
        placeholder="First Name"
        small={false}
      />
      <StyledInput
        disabled={false}
        large={true}
        placeholder="Last Name"
        small={false}
      />
      <ButtonGroup>
        <HiddenInput id="file_input" type="file" onChange={onAddImage} />
        <StyledButton
          onClick={() => document.getElementById('file_input').click()}
          minimal
          intent="primary"
        >
          <Icon icon="document" /> Upload Photo... <Icon icon="small-cross" />
        </StyledButton>
        <StyledButton intent="primary">
          Open Plugin
          {/* <Icon icon="tick" /> */}
        </StyledButton>
      </ButtonGroup>
    </Card>
  </StyledUserDetails>
)

export default UserDetails
