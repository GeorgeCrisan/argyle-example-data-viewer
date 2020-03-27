import React, { useState } from 'react'
import styled from 'styled-components'
import { withRouter, Link } from 'react-router-dom'
import ArrowForward from '@material-ui/icons/ArrowForward'
import PageWrapper from './PageWrapper'
import Button from './Button'
import Tooltip from './Tooltip'

const SanitizedLink = ({ top, bottom, ...rest }) => <Link {...rest} />

const UserCard = styled(SanitizedLink)`
  display: block;
  ${({ top }) => top && 'border-radius: 5px 5px 0 0;'}
  ${({ bottom }) =>
    bottom &&
    'border-radius: 0 0 5px 5px;'}
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  width: 70rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    text-decoration: none;
  }
`

const Details = styled.div`
  display: flex;
  align-items: center;
`

const Name = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  min-width: 12rem;
  margin-right: 5rem;

  ${UserCard}:hover & {
    color: ${({ theme }) => theme.colors.defaultGreen};
  }
`

const Email = styled.div`
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.4);
`

const PageContent = styled.div`
  margin: 0 auto;
  max-width: 70rem;
  margin-top: 19.3rem;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 500;
  margin-bottom: 1.4rem;
  margin-right: 2.7rem;
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

const StyledArrowForward = styled(ArrowForward)`
  && {
    width: 18px;
    height: 18px;
    color: #999999;

    ${UserCard}:hover & {
      color: ${({ theme }) => theme.colors.defaultGreen};
    }
  }
`

const ArrowWrapper = styled.div`
  background-color: #f5f5f5;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HomePage = ({ users }) => {
  const [isTooltipOpen, toggleTooltip] = useState(false)

  return (
    <PageWrapper showSignOutButton>
      {users.length ? (
        <>
          <PageContent>
            <TitleWrapper>
              <Title>Users</Title>
              <Tooltip toggleTooltip={toggleTooltip} isOpen={isTooltipOpen}>
                <ButtonWrapper>
                  <Button onClick={() => toggleTooltip(!isTooltipOpen)} addIcon>
                    Add user
                  </Button>
                </ButtonWrapper>
              </Tooltip>
            </TitleWrapper>

            <SubTitle>Discover work data by selecting a user</SubTitle>

            {users.map((user, i) => (
              <UserCard
                to={{
                  pathname: `/user-data/${user.userId}/profiles`,
                  state: { fullName: user.fullName }
                }}
                key={user.userId + user.email}
                top={i === 0}
                bottom={i === users.length - 1}
              >
                <Details>
                  <Name>{user.fullName}</Name>
                  <Email>{user.email}</Email>
                </Details>
                <ArrowWrapper>
                  <StyledArrowForward />
                </ArrowWrapper>
              </UserCard>
            ))}
          </PageContent>
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
              <Button onClick={() => toggleTooltip(!isTooltipOpen)} addIcon>
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
