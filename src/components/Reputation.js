import React from 'react'
import styled from 'styled-components'

const StyledReputation = styled.div``

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

const Reputation = ({ acceptanceRate, rating, achievements }) => (
  <StyledReputation>
    <RatingWrapper>
      {rating ? (
        <RatingItem>
          <Rating>{rating}</Rating>
          <Label>Rating</Label>
        </RatingItem>
      ) : (
        '-'
      )}
      <VerticalDivider />
      {acceptanceRate ? (
        <RatingItem>
          <Rating>{acceptanceRate}%</Rating>
          <Label>Acceptance Rate</Label>
        </RatingItem>
      ) : (
        '-'
      )}
    </RatingWrapper>
    {!!achievements.length && (
      <Achievements>
        <AchievementsTitle>Achievements</AchievementsTitle>
        {achievements.map(({ label, description }, i) => (
          <Achievement key={label + i}>
            <AchievementLabel>{label}</AchievementLabel>
            <AchievementDescription>{description}</AchievementDescription>
          </Achievement>
        ))}
      </Achievements>
    )}
  </StyledReputation>
)

export default Reputation
