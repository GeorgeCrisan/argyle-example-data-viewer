import React, { useState } from 'react'
import styled from 'styled-components'
import { Card, Elevation } from '@blueprintjs/core'
import { withRouter } from 'react-router-dom'
import Spinner from './Spinner'
import PageWrapper from './PageWrapper'
import Button from './Button'
import Tooltip from './Tooltip'

const UsersTitle = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 3rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
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

const PageContent = styled.div`
  margin: 0 auto;
  max-width: 70rem;
  margin-top: 19.3rem;
`

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 500;
  margin-bottom: 1.4rem;
`

const SubTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.defaultGreen};
  margin-bottom: 2.4rem;
`

const ButtonWrapper = styled.div`
  width: 5rem;
  overflow: visible;
`

const HomePage = ({ history }) => {
  const [isTooltipOpen, toggleTooltip] = useState(true)

  const users = []
  return (
    <PageWrapper showSignOutButton>
      {/* <TopNavigation>
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

        </TopNavigation> */}

      {users.length ? (
        <>
          <UsersTitle> Users list</UsersTitle>
          {users.map(user => (
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
          ))}
        </>
      ) : (
        <PageContent>
          <Title>Welcome to DataViewer</Title>
          <SubTitle>
            DataViewer is a simple way to browse your user’s work history. Start
            by adding your first worker.
          </SubTitle>

          <Tooltip toggleTooltip={toggleTooltip} isOpen={isTooltipOpen}>
            <ButtonWrapper>
              <Button onClick={() => toggleTooltip(true)} addIcon>
                Add user
              </Button>
            </ButtonWrapper>
          </Tooltip>
        </PageContent>
      )}
    </PageWrapper>
  )
}

export default withRouter(HomePage)
