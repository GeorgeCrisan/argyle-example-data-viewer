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
      const response = await api.getDocuments(selectedAccount.id)
      if (!response.length) {
        setError(true)
      }
      setDocuments(response)
      setLoading(false)
    }
    fetchDocuments()
  }, [selectedAccount.id])

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

  return (
    <Table
      headerItems={[
        'Document Number',
        'Document Type',
        'Expiration Date',
        'Created At'
      ]}
      items={documents.map(
        ({
          id,
          document_number,
          document_type,
          expiration_date,
          created_at
        }) => ({
          id,
          document_number,
          document_type,
          expiration_date: expiration_date
            ? new Date(expiration_date).toDateString()
            : null,
          created_at: new Date(created_at).toDateString()
        })
      )}
    />
  )
}

export default DocumentsContainer
