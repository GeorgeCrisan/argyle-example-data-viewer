import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../api/api'
import Account from './AccountContainer'

const Reports = styled.div`
  margin: 10rem auto;
  max-width: 60rem;
`

const ReportContainer = props => {
  const userId = props.match.params.userId
  const [accounts, setAccounts] = useState([])

  useEffect(() => {
    const fetchAccounts = async () => {
      const results = await api.getAccounts(userId)

      setAccounts(results)
    }
    fetchAccounts()
  }, [userId])

  return (
    <Reports>
      {accounts.map(account => (
        <Account key={account.id} account={account} />
      ))}
    </Reports>
  )
}

export default ReportContainer
