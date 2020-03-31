import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../api/api'
import Reputation from '../components/Reputation'
import Spinner from '../components/Spinner'

const StyledSpinner = styled.div`
  min-height: 30rem;
  min-width: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

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

      const response =
        selectedAccount.id === 'combined'
          ? await api.getReputations({
              userId: selectedAccount.userId
            })
          : await api.getReputations({
              accountId: selectedAccount.id
            })

      setError(!response.length)
      setReputations(response)
      setLoading(false)
    }

    fetchReputations()
  }, [selectedAccount.id, selectedAccount.userId])

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

  const acceptanceRate = reputations.reduce(
    (a, b) => b.acceptance_rate * 100 + a,
    0
  )
  const rating = reputations.reduce((a, b) => b.rating * 100 + a, 0)
  const formattedRating = (rating * 0.01).toFixed(2)

  const achievements = reputations.reduce(
    (a, b) => (b.achievements ? [...a, ...b.achievements] : a),
    []
  )

  return (
    <Reputation
      acceptanceRate={acceptanceRate}
      rating={formattedRating}
      achievements={achievements}
    />
  )
}

export default ReputationsContainer
