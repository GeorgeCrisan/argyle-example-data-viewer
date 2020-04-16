import React, { useState, useEffect } from 'react'
import api from '../api/api'
import { WrappedSpinner as Spinner } from '../components/Spinner'
import Vehicles from '../components/Vehicles'
import ErrorMsg from '../components/ErrorMsg'

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
              userId: selectedAccount.userId,
            })
          : await api.getVehicles({
              accountId: selectedAccount.id,
            })

      setError(!response.length)

      const accounts = await Promise.all(
        response.map(async (vehicle) => {
          const account = await api.getAccount(vehicle.account)
          return { ...vehicle, ...account }
        })
      )

      setVehicles(accounts)
      setLoading(false)
    }
    fetchVehicles()
  }, [selectedAccount.id, selectedAccount.userId])

  if (isLoading) return <Spinner />

  if (isError) {
    return <ErrorMsg selectedAccount={selectedAccount} />
  }

  if (!vehicles.length) return null
  return <Vehicles vehicles={vehicles} />
}

export default VehiclesContainer
