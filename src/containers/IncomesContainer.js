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

const IncomesContainer = ({ selectedAccount }) => {
  const [incomes, setIncomes] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchIncomes = async () => {
      setLoading(true)
      const response = await api.getIncomes(selectedAccount.id)
      setIncomes(response)
      setLoading(false)
    }
    fetchIncomes()
  }, [selectedAccount.id])

  if (isLoading)
    return (
      <StyledSpinner>
        <Spinner />
      </StyledSpinner>
    )

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
