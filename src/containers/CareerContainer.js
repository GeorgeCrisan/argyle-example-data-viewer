import React, { useState, useEffect } from 'react'
import moment from 'moment'
import api from '../api/api'
import Career from '../components/Career'
import { WrappedSpinner as Spinner } from '../components/Spinner'
import ErrorMsg from '../components/ErrorMsg'

const CareerContainer = ({ selectedAccount, accounts }) => {
  const [careers, setCareers] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)

  useEffect(() => {
    const fetchCareers = async () => {
      setLoading(true)
      const response =
        selectedAccount.id === 'combined'
          ? await api.getCareers({
              userId: selectedAccount.userId,
            })
          : await api.getCareers({
              accountId: selectedAccount.id,
            })

      setError(!response.length)
      setCareers(response)
      setLoading(false)
    }
    fetchCareers()
  }, [selectedAccount.id, selectedAccount.userId])

  if (isLoading) return <Spinner />

  if (isError) {
    return <ErrorMsg selectedAccount={selectedAccount} />
  }

  const sumItems = (a, b, item) => a[item] + (b[item] ? parseInt(b[item]) : 0)

  const combinedCareers = careers.reduce(
    (a, b) => ({
      id: b.id,
      type: 'combined',
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
        : a.last_activity_date,
    }),
    {
      total_hours_spent_working: 0,
      length_of_work: 0,
      last_activity_date: '1991-11-11', // fake older date
      first_activity_date: '2222-01-22', // fake future date to compare
    }
  )

  const allCareers = [
    combinedCareers,
    ...careers.map((career) => ({
      ...career,
      account: accounts.find((account) => account.id === career.account)
        .data_partner,
    })),
  ]

  return <Career careers={careers.length > 1 ? allCareers : careers} />
}

export default CareerContainer
