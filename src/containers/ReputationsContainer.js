import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../api/api'
import Table from '../components/Table'
import Spinner from '../components/Spinner'

const StyledSpinner = styled.div`
  min-height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

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

const Error = styled.div`
  font-size: 2.4rem;
`

const ReputationsContainer = ({ selectedAccount }) => {
  const [reputations, setReputations] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)

  useEffect(() => {
    const fetchReputations = async () => {
      setLoading(true)
      const response = await api.getReputations(selectedAccount.id)
      if (!response.length) {
        setError(true)
      }
      setReputations(response)
      setLoading(false)
    }
    fetchReputations()
  }, [selectedAccount.id])

  if (isLoading)
    return (
      <StyledSpinner>
        <Spinner />
      </StyledSpinner>
    )

  if (isError) {
    return (
      <Error>
        Status: {selectedAccount.status} {selectedAccount.error_code}, No Data
      </Error>
    )
  }

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
