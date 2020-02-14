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

const VehiclesContainer = ({ accountId }) => {
  const [vehicles, setVehicles] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchVehicles = async () => {
      setLoading(true)
      const response = await api.getVehicles(accountId)
      setVehicles(response)
      setLoading(false)
    }
    fetchVehicles()
  }, [accountId])

  if (isLoading)
    return (
      <StyledSpinner>
        <Spinner />
      </StyledSpinner>
    )

  return (
    <Table
      headerItems={['Make', 'Model', 'Year', 'Identification']}
      items={vehicles.map(({ id, make, model, year, identification }) => ({
        id,
        make,
        model,
        year,
        identification
      }))}
    />
  )
}

export default VehiclesContainer
