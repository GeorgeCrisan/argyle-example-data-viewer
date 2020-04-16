import React, { useState, useEffect } from 'react'
import api from '../api/api'
import Activities from '../components/Activities'
import { WrappedSpinner as Spinner } from '../components/Spinner'
import ErrorMsg from '../components/ErrorMsg'

const ActivitiesContainer = ({ selectedAccount }) => {
  const [activities, setActivities] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)

  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true)

      const response = await (selectedAccount.id === 'combined'
        ? api.getActivities({
            userId: selectedAccount.userId,
          })
        : api.getActivities({
            accountId: selectedAccount.id,
          }))

      setError(!response.length)
      setActivities(response)
      setLoading(false)
    }
    fetchActivities()
  }, [selectedAccount.id, selectedAccount.userId])

  if (isLoading) return <Spinner />

  if (isError) {
    return <ErrorMsg selectedAccount={selectedAccount} />
  }

  const sortedActivities = activities.sort(
    (a, b) => b.start_date - a.start_date
  )

  return <Activities activities={sortedActivities} />
}

export default ActivitiesContainer
