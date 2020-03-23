import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import Button from './Button'
import PageWrapper from './PageWrapper'

const StyledSignInPage = styled.div`
  margin: 0 auto;
  max-width: 60rem;
  padding: 18.4rem 0;
  height: 100%;
`

const PageContent = styled.div`
  margin: 0 auto;
  max-width: 50rem;
`

const Title = styled.h2`
  font-size: 25px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.defaultGreen};
  margin-bottom: 4.2rem;
`

const StyledInput = styled(Input)`
  && {
    margin-bottom: 3rem;
  }
`

const SignInPage = ({ onInputChange, clientId, clientSecret, onSubmit }) => (
  <PageWrapper>
    <StyledSignInPage>
      <PageContent>
        <Title>Sign in to DataViewer</Title>
        <form onSubmit={onSubmit}>
          <StyledInput
            label="Client ID"
            onChange={onInputChange}
            value={clientId}
            name="clientId"
            inputId="clientIdInput"
            type="text"
          />
          <StyledInput
            label="Client Secret"
            inputId="clientSecretInput"
            onChange={onInputChange}
            value={clientSecret}
            name="clientSecret"
            type="clientSecret"
          />
          <Button type="submit" onClick={onSubmit} arrowLeft>
            Continue
          </Button>
        </form>
      </PageContent>
    </StyledSignInPage>
  </PageWrapper>
)

export default SignInPage
