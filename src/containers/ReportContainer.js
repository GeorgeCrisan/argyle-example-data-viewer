import React, { useState, useEffect } from 'react'
import api from '../api/api'
import Report from '../components/Report'

const ReportContainer = props => {
  const userId = props.match.params.userId
  const [accounts, setAccounts] = useState([])
  const [profile, setProfile] = useState(null)
  const [activities, setActivities] = useState([])

  useEffect(() => {
    const fetchAccounts = async () => {
      const results = await api.getAccounts(userId)
      const resp = await api.getProfiles(userId)
      const res = await api.getActivities(userId)

      setAccounts(results)
      setProfile(resp)
      setActivities(res)
    }
    fetchAccounts()
  }, [userId])

  if (!profile) return null

  const {
    first_name,
    last_name,
    full_name,
    email,
    phone_number,
    picture_url,
    address
  } = profile

  console.log(activities)

  return (
    <Report
      fullName={full_name}
      image={picture_url}
      accounts={accounts}
      email={email}
      phoneNumber={phone_number}
      address={address}
      activities={activities}
    />
  )
}

export default ReportContainer
