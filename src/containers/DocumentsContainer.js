import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../api/api'
import Documents from '../components/Documents'
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
              userId: selectedAccount.userId
            })
          : await api.getDocuments({
              accountId: selectedAccount.id
            })

      setError(!response.length)
      setDocuments(response)
      setLoading(false)
    }
    fetchDocuments()
  }, [selectedAccount, selectedAccount.id, selectedAccount.userId])

  if (isLoading)
    return (
      <StyledSpinner>
        <Spinner />
      </StyledSpinner>
    )

  if (isError) {
    return (
      <Error>
        Status: {selectedAccount.status} {selectedAccount.error_code}, No data
      </Error>
    )
  }

  return <Documents documents={documents} />
}

export default DocumentsContainer
