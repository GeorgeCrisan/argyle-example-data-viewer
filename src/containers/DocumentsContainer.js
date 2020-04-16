import React, { useState, useEffect } from 'react'
import api from '../api/api'
import Documents from '../components/Documents'
import { WrappedSpinner as Spinner } from '../components/Spinner'
import ErrorMsg from '../components/ErrorMsg'

const DocumentsContainer = ({ selectedAccount }) => {
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
      setDocuments(response)
      setLoading(false)
    }
    fetchDocuments()
  }, [selectedAccount, selectedAccount.id, selectedAccount.userId])

  if (isLoading) return <Spinner />

  if (isError) {
    return <ErrorMsg selectedAccount={selectedAccount} />
  }

  return <Documents documents={documents} />
}

export default DocumentsContainer
