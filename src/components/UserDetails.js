import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import Button from './Button'
import PageWrapper from './PageWrapper'

const StyledUserDetails = styled.div`
  margin: 19.3rem auto 10rem auto;
  max-width: 70rem;
`

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 500;
  margin-bottom: 1.4rem;
`

const Subtitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 300;
  color: #794ed0;
  margin-bottom: 4.4rem;
`

const StyledForm = styled.form`
  max-width: 40rem;
`

const StyledInput = styled(Input)`
  && {
    margin-bottom: 3rem;
  }
`

const UserDetails = ({ onInputChange, email, fullName, onSubmit }) => (
  <PageWrapper>
    <StyledUserDetails>
      <Title>Add your work accounts</Title>
      <Subtitle>
        You’ve been invited to add your work accounts to DataViewer.
      </Subtitle>
      <StyledForm onSubmit={onSubmit}>
        <StyledInput
          label="Full Name"
          inputId="fullNameUserDetails"
          onChange={onInputChange}
          value={fullName}
          name="fullName"
          type="text"
          purple
        />
        <StyledInput
          label="Email"
          onChange={onInputChange}
          value={email}
          name="email"
          inputId="emailUserDetails"
          type="email"
          purple
        />

        <Button type="submit" onClick={onSubmit} addIcon purple>
          Add work accounts
        </Button>
      </StyledForm>
    </StyledUserDetails>
  </PageWrapper>
)

export default UserDetails
