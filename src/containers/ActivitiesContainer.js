import React, { useState, useEffect } from 'react'
import api from '../api/api'
import Activities from '../components/Activities'

const ActivitiesContainer = ({ accountId }) => {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    const fetchAccounts = async () => {
      const activitiesResponse = await api.getActivities(accountId)
      setActivities(activitiesResponse)
    }
    fetchAccounts()
  }, [accountId])

  return <Activities activities={activities} />
}

export default ActivitiesContainer
