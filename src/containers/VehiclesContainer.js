import React, { useState, useEffect } from 'react'
import api from '../api/api'
import Table from '../components/Table'

const VehiclesContainer = ({ accountId }) => {
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    const fetchVehicles = async () => {
      const response = await api.getVehicles(accountId)
      setVehicles(response)
    }
    fetchVehicles()
  }, [accountId])

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
