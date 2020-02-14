import React, { useState, useEffect } from 'react'
import api from '../api/api'
import Table from '../components/Table'

const CareersContainer = ({ accountId }) => {
  const [careers, setCareers] = useState([])

  useEffect(() => {
    const fetchCareers = async () => {
      const response = await api.getCareers(accountId)
      setCareers(response)
    }
    fetchCareers()
  }, [accountId])

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
