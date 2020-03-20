import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'

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
  color: #40ac74;
  margin-bottom: 4.2rem;
`

const StyledInput = styled(Input)`
  && {
    margin-bottom: 3rem;
  }
`

const SignInPage = ({ onInputChange, email, password, onSubmit }) => (
  <>
    <Header />
    <StyledSignInPage>
      <PageContent>
        <Title>Sign in to DataViewer</Title>
        <form onSubmit={onSubmit}>
          <StyledInput
            label="Client ID"
            onChange={onInputChange}
            value={email}
            name="email"
            inputId="clientIdInput"
            type="text"
          />
          <StyledInput
            label="Client Secret"
            inputId="clientSecretInput"
            onChange={onInputChange}
            value={password}
            name="password"
            type="password"
          />
          <Button type="submit" onClick={onSubmit} intent="primary">
            Continue
          </Button>
        </form>
      </PageContent>
    </StyledSignInPage>
    <Footer />
  </>
)

export default SignInPage
