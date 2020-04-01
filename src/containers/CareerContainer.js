import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import api from '../api/api'
import Career from '../components/Career'
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

const CareerContainer = ({ selectedAccount }) => {
  const [careers, setCareers] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)

  useEffect(() => {
    const fetchCareers = async () => {
      setLoading(true)
      const response =
        selectedAccount.id === 'combined'
          ? await api.getCareers({
              userId: selectedAccount.userId
            })
          : await api.getCareers({
              accountId: selectedAccount.id
            })

      setError(!response.length)
      setCareers(response)
      setLoading(false)
    }
    fetchCareers()
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

  const sumItems = (a, b, item) => a[item] + (b[item] ? parseInt(b[item]) : 0)

  const career = careers.reduce(
    (a, b) => ({
      id: b.id,
      total_hours_spent_working: sumItems(a, b, 'total_hours_spent_working'),
      length_of_work: sumItems(a, b, 'length_of_work'),
      first_activity_date: moment(b.first_activity_date, 'YYYY-MM-DD').isBefore(
        moment(a.first_activity_date, 'YYYY-MM-DD')
      )
        ? b.first_activity_date
        : a.first_activity_date,
      last_activity_date: moment(b.last_activity_date, 'YYYY-MM-DD').isAfter(
        moment(a.last_activity_date, 'YYYY-MM-DD')
      )
        ? b.last_activity_date
        : a.last_activity_date
    }),
    {
      total_hours_spent_working: 0,
      length_of_work: 0,
      last_activity_date: '1991-11-11', // fake older date
      first_activity_date: '2222-01-22' // fake future date to compare
    }
  )

  return <Career career={career} />
}

export default CareerContainer
