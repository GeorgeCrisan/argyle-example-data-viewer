import React, { useState, useEffect } from 'react'
import api from '../api/api'
import Reputation from '../components/Reputation'
import { WrappedSpinner as Spinner } from '../components/Spinner'
import ErrorMsg from '../components/ErrorMsg'

const ReputationsContainer = ({ selectedAccount, accounts }) => {
  const [reputations, setReputations] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)

  useEffect(() => {
    const fetchReputations = async () => {
      setLoading(true)

      const response =
        selectedAccount.id === 'combined'
          ? await api.getReputations({
              userId: selectedAccount.userId,
            })
          : await api.getReputations({
              accountId: selectedAccount.id,
            })

      setError(!response.length)
      setReputations(response)
      setLoading(false)
    }

    fetchReputations()
  }, [selectedAccount.id, selectedAccount.userId])

  if (isLoading) return <Spinner />

  if (isError) {
    return <ErrorMsg selectedAccount={selectedAccount} />
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

  const combinedReputations = {
    acceptance_rate: acceptanceRate,
    rating: formattedRating,
    achievements,
    type: 'combined',
  }

  const allReputations = [
    combinedReputations,
    ...reputations.map((reputation) => ({
      ...reputation,
      account: accounts.find((account) => account.id === reputation.account)
        .data_partner,
    })),
  ]

  return (
    <Reputation
      reputations={reputations.length > 1 ? allReputations : reputations}
    />
  )
}

export default ReputationsContainer
