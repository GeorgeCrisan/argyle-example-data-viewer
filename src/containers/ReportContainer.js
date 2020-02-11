import React, { useState, useEffect } from 'react'
import api from '../api/api'
import Account from './AccountContainer'

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

  return accounts.map(account => <Account key={account.id} account={account} />)
}

export default ReportContainer
