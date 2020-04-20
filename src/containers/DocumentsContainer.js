import React, { useState, useEffect } from 'react'
import api from '../api/api'
import Documents from '../components/Documents'
import { WrappedSpinner as Spinner } from '../components/Spinner'
import ErrorMsg from '../components/ErrorMsg'

const DocumentsContainer = ({ selectedAccount, accounts }) => {
  const [documents, setDocuments] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)

  useEffect(() => {
    const fetchDocuments = async () => {
      setLoading(true)

      const response =
        selectedAccount.id === 'combined'
          ? await api.getDocuments({
              userId: selectedAccount.userId,
            })
          : await api.getDocuments({
              accountId: selectedAccount.id,
            })

      setError(!response.length)

      const allDocuments = []

      accounts.forEach((account) => {
        const documents = response.filter((el) => el.account === account.id)

        if (documents.length) {
          documents.map((document) =>
            allDocuments.push({
              ...document,
              data_partner: account.data_partner,
            })
          )
        } else {
          allDocuments.push({
            empty: true,
            id: account.id,
            data_partner: account.data_partner,
          })
        }
      })

      setDocuments(selectedAccount.id === 'combined' ? allDocuments : response)
      setLoading(false)
    }
    fetchDocuments()
  }, [accounts, selectedAccount, selectedAccount.id, selectedAccount.userId])

  if (isLoading) return <Spinner />

  if (isError) {
    return <ErrorMsg selectedAccount={selectedAccount} />
  }

  return <Documents documents={documents} />
}

export default DocumentsContainer
