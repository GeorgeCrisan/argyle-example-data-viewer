import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../api/api'
import Activities from '../components/Activities'
import Spinner from '../components/Spinner'

const StyledSpinner = styled.div`
  min-height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ActivitiesContainer = ({ selectedAccount }) => {
  const [activities, setActivities] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true)
      const activitiesResponse = await api.getActivities(selectedAccount.id)
      setActivities(activitiesResponse)
      setLoading(false)
    }
    fetchActivities()
  }, [selectedAccount.id])

  if (isLoading)
    return (
      <StyledSpinner>
        <Spinner />
      </StyledSpinner>
    )

  return <Activities activities={activities} />
}

export default ActivitiesContainer
