import React, { useState, useEffect } from 'react'
import api from '../api/api'
import Report from '../components/Report'

const ReportContainer = ({ account }) => {
  const [profile, setProfile] = useState(null)
  const [activities, setActivities] = useState([])

  useEffect(() => {
    const fetchAccounts = async () => {
      const resp = await api.getProfile(account.id)
      const res = await api.getActivities(account.id)

      setProfile(resp)
      setActivities(res)
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
    />
  )
}

export default ReportContainer
