import React, { useState, useEffect } from 'react'
import api from '../api/api'
import Report from '../components/Report'

const ReportContainer = ({ account }) => {
  const [profile, setProfile] = useState(null)
  const [activities, setActivities] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [documents, setDocuments] = useState([])
  const [incomes, setIncomes] = useState([])

  useEffect(() => {
    const fetchAccounts = async () => {
      const { id } = account
      const profileResponse = await api.getProfile(id)
      const activitiesResponse = await api.getActivities(id)
      const vehiclesResponse = await api.getVehicles(id)
      const documentsResponse = await api.getDocuments(id)
      const incomesResponse = await api.getIncomes(id)

      setProfile(profileResponse)
      setActivities(activitiesResponse)
      setVehicles(vehiclesResponse)
      setDocuments(documentsResponse)
      setIncomes(incomesResponse)
    }
    fetchAccounts()
  }, [account])

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
      documents={documents}
      incomes={incomes}
    />
  )
}

export default ReportContainer
