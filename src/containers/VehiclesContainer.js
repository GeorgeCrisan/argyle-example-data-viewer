import React, { useState, useEffect } from 'react'
import api from '../api/api'
import { WrappedSpinner as Spinner } from '../components/Spinner'
import Vehicles from '../components/Vehicles'
import ErrorMsg from '../components/ErrorMsg'

const VehiclesContainer = ({ selectedAccount, accounts }) => {
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

      const allVehicles = []

      accounts.forEach((account) => {
        const vehicles = response.filter((el) => el.account === account.id)

        if (vehicles.length) {
          vehicles.map((vehicle) =>
            allVehicles.push({ ...vehicle, data_partner: account.data_partner })
          )
        } else {
          allVehicles.push({
            empty: true,
            id: account.id,
            data_partner: account.data_partner,
          })
        }
      })

      setVehicles(selectedAccount.id === 'combined' ? allVehicles : response)
      setLoading(false)
    }
    fetchVehicles()
  }, [accounts, selectedAccount.id, selectedAccount.userId])

  if (isLoading) return <Spinner />

  if (isError) {
    return <ErrorMsg selectedAccount={selectedAccount} />
  }

  return <Vehicles vehicles={vehicles} />
}

export default VehiclesContainer
