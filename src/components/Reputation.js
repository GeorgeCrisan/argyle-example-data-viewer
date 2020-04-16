import React from 'react'
import styled from 'styled-components'
import { firstWordToUpperCase } from '../helpers'

const StyledReputations = styled.div`
  max-width: 90rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`

const StyledReputation = styled.div`
  border-radius: 5px;
  margin-right: 4rem;
  margin-bottom: 4rem;
  min-width: 26rem;
  min-height: 20rem;
  ${({ greyBackground }) =>
    greyBackground &&
    `
  background-color: rgba(249, 249, 249, 0.9);
  padding: 1.6rem 2rem;
  `}
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
`

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4.3rem;
`

const RatingItem = styled.div``

const Rating = styled.div`
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`

const Label = styled.div`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.4);
`

const VerticalDivider = styled.div`
  width: 2px;
  height: 45px;
  background-color: rgba(0, 0, 0, 0.05);
  margin: 0 2.8rem;
`

const Achievements = styled.div``

const AchievementsTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 2.1rem;
`

const Achievement = styled.div`
  margin-bottom: 1.8rem;
`

const AchievementLabel = styled.div`
  font-size: 1.4rem;
`

const AchievementDescription = styled.div`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.4);
`

const Reputation = ({ reputations }) => (
  <StyledReputations>
    {reputations.map((reputation, i) => (
      <StyledReputation
        greyBackground={reputations.length > 1}
        key={reputation.id + i}
      >
        {reputations.length > 1 && (
          <Title>
            {reputation.type === 'combined'
              ? 'Combined'
              : firstWordToUpperCase(reputation.account)}
          </Title>
        )}
        <RatingWrapper>
          {reputation.rating ? (
            <RatingItem>
              <Rating>{reputation.rating}</Rating>
              <Label>Rating</Label>
            </RatingItem>
          ) : (
            '-'
          )}
          <VerticalDivider />
          {reputation.acceptance_rate ? (
            <RatingItem>
              <Rating>{reputation.acceptance_rate}%</Rating>
              <Label>Acceptance Rate</Label>
            </RatingItem>
          ) : (
            '-'
          )}
        </RatingWrapper>
        {reputation.achievements && !!reputation.achievements.length && (
          <Achievements>
            <AchievementsTitle>Achievements</AchievementsTitle>
            {reputation.achievements.map(({ label, description }, i) => (
              <Achievement key={label + i}>
                <AchievementLabel>{label}</AchievementLabel>
                <AchievementDescription>{description}</AchievementDescription>
              </Achievement>
            ))}
          </Achievements>
        )}
      </StyledReputation>
    ))}
  </StyledReputations>
)

export default Reputation
