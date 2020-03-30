import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../api/api'
import Spinner from '../components/Spinner'
import Vehicles from '../components/Vehicles'

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

const VehiclesContainer = ({ selectedAccount }) => {
  const [vehicles, setVehicles] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)

  useEffect(() => {
    const fetchVehicles = async () => {
      setLoading(true)

      const response =
        selectedAccount.id === 'combined'
          ? await api.getVehicles({
              userId: selectedAccount.userId
            })
          : await api.getVehicles({
              accountId: selectedAccount.id
            })

      setError(!response.length)

      const accounts = await Promise.all(
        response.map(async vehicle => {
          const account = await api.getAccount(vehicle.account)
          return { ...vehicle, ...account }
        })
      )

      setVehicles(accounts)
      setLoading(false)
    }
    fetchVehicles()
  }, [selectedAccount.id, selectedAccount.userId])

  if (isLoading)
    return (
      <StyledSpinner>
        <Spinner />
      </StyledSpinner>
    )

  if (isError) {
    return (
      <Error>
        Status: {selectedAccount.status} {selectedAccount.error_code}, No Data
      </Error>
    )
  }

  if (!vehicles.length) return null
  return <Vehicles vehicles={vehicles} />
}

export default VehiclesContainer
