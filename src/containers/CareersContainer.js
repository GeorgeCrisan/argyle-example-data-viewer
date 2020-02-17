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

const Error = styled.div`
  font-size: 2.4rem;
`

const CareersContainer = ({ selectedAccount }) => {
  const [careers, setCareers] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)

  useEffect(() => {
    const fetchCareers = async () => {
      setLoading(true)
      const response = await api.getCareers(selectedAccount.id)
      if (!response.length) {
        setError(true)
      }
      setCareers(response)
      setLoading(false)
    }
    fetchCareers()
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
    <Table
      headerItems={[
        'Total Hours Working',
        'First Activity Date',
        'Last Activity Date',
        'Length of work (Days)'
      ]}
      items={careers.map(
        ({
          id,
          total_hours_spent_working,
          first_activity_date,
          last_activity_date,
          length_of_work
        }) => ({
          id,
          total_hours_spent_working,
          first_activity_date: new Date(first_activity_date).toDateString(),
          last_activity_date: new Date(last_activity_date).toDateString(),
          length_of_work
        })
      )}
    />
  )
}

export default CareersContainer
