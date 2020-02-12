import React, { useState, useEffect } from 'react'
import api from '../api/api'
import Report from '../components/Report'

const ReportContainer = ({ account }) => {
  const [profile, setProfile] = useState(null)
  const [activities, setActivities] = useState([])
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    const fetchAccounts = async () => {
      const resp = await api.getProfile(account.id)
      const res = await api.getActivities(account.id)
      const vehiclesResponse = await api.getVehicles(account.id)

      console.log('vehiucles', vehiclesResponse)

      setProfile(resp)
      setActivities(res)
      setVehicles(vehiclesResponse)
    }
    fetchAccounts()
  }, [account.id])

  if (!profile) return null

  const { full_name, email, phone_number, picture_url, address } = profile

  return (
    <Report
      fullName={full_name}
      image={picture_url}
      email={email}
      phoneNumber={phone_number}
      address={address}
      activities={activities}
      account={account}
      vehicles={vehicles}
    />
  )
}

export default ReportContainer
