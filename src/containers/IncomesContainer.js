import React, { useState, useEffect } from 'react'
import api from '../api/api'
import Table from '../components/Table'

const IncomesContainer = ({ accountId }) => {
  const [incomes, setIncomes] = useState([])

  useEffect(() => {
    const fetchIncomes = async () => {
      const response = await api.getIncomes(accountId)
      setIncomes(response)
    }
    fetchIncomes()
  }, [accountId])

  return (
    <Table
      headerItems={['Pay', 'Tips', 'Bonus', 'Fees', 'Total', 'Currency']}
      items={incomes.map(({ id, pay, tips, bonus, fees, total, currency }) => ({
        id,
        pay,
        tips,
        bonus,
        fees,
        total,
        currency
      }))}
    />
  )
}

export default IncomesContainer
