import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../api/api'
import Activities from '../components/Activities'
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

const ActivitiesContainer = ({ selectedAccount }) => {
  const [activities, setActivities] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)

  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true)

      const response =
        selectedAccount.id === 'combined'
          ? await api.getActivities({
              userId: selectedAccount.userId
            })
          : await api.getActivities({
              accountId: selectedAccount.id
            })

      setError(!response.length)

      setActivities(response)
      setLoading(false)
    }
    fetchActivities()
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
        Status: {selectedAccount.status} {selectedAccount.error_code}, No data
      </Error>
    )
  }

  return <Activities activities={activities} />
}

export default ActivitiesContainer
