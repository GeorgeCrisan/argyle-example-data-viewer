import React, { useState, useEffect } from 'react'
import api from '../api/api'
import Table from '../components/Table'

const DocumentsContainer = ({ accountId }) => {
  const [documents, setDocuments] = useState([])

  useEffect(() => {
    const fetchDocuments = async () => {
      const response = await api.getDocuments(accountId)
      setDocuments(response)
    }
    fetchDocuments()
  }, [accountId])

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
