import React, { useState, useEffect } from 'react'
import api from '../api/api'
import Income from '../components/Income'
import { WrappedSpinner as Spinner } from '../components/Spinner'
import ErrorMsg from '../components/ErrorMsg'

const IncomeContainer = ({ selectedAccount }) => {
  const [incomes, setIncomes] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)

  useEffect(() => {
    const fetchIncomes = async () => {
      setLoading(true)

      const response =
        selectedAccount.id === 'combined'
          ? await api.getIncomes({
              userId: selectedAccount.userId,
            })
          : await api.getIncomes({
              accountId: selectedAccount.id,
            })

      setError(!response.length)
      setIncomes(response)
      setLoading(false)
    }
    fetchIncomes()
  }, [selectedAccount.id, selectedAccount.userId])

  if (isLoading) return <Spinner />

  if (isError) {
    return <ErrorMsg selectedAccount={selectedAccount} />
  }

  const sumItems = (a, b, item) =>
    ((a[item] * 100 + (b[item] ? b[item] * 100 : 0)) * 0.01).toFixed(2)

  const income = incomes.reduce(
    (a, b) => ({
      id: b.id,
      pay: sumItems(a, b, 'pay'),
      tips: sumItems(a, b, 'tips'),
      bonus: sumItems(a, b, 'bonus'),
      fees: sumItems(a, b, 'fees'),
      total: sumItems(a, b, 'total'),
      currency: b.currency,
    }),
    { total: 0, pay: 0, tips: 0, bonus: 0, fees: 0 }
  )

  return <Income income={income} />
}

export default IncomeContainer
