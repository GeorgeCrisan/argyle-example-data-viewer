import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../api/api'
import Table from '../components/Table'

const Achievements = styled.div`
  margin-top: 2rem;
`

const AchievementsTitle = styled.div`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-weight: 600;
  text-align: left;
`

const Achievement = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
`

const AchievementLabel = styled.div`
  margin-right: 2rem;
  font-weight: 500;
`

const AchievementDescription = styled.div``

const ReputationsContainer = ({ accountId }) => {
  const [reputations, setReputations] = useState([])

  useEffect(() => {
    const fetchReputations = async () => {
      const response = await api.getReputations(accountId)
      setReputations(response)
    }
    fetchReputations()
  }, [accountId])

  return (
    <>
      <Table
        headerItems={['Rating', 'Acceptance Rate']}
        items={reputations.map(({ id, rating, acceptance_rate }) => ({
          id,
          rating,
          acceptance_rate
        }))}
        reputations={reputations.map(({ id, achievements }) => ({
          id,
          achievements
        }))}
      />
      {reputations.map(
        ({ id, achievements }) =>
          achievements && (
            <Achievements key={id}>
              <AchievementsTitle>Achievements</AchievementsTitle>
              {achievements.map(({ label, description }, i) => (
                <Achievement key={`${label}${i}`}>
                  <AchievementLabel>{label}</AchievementLabel>
                  <AchievementDescription>{description}</AchievementDescription>
                </Achievement>
              ))}
            </Achievements>
          )
      )}
    </>
  )
}

export default ReputationsContainer
