import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import api from '../api/api'
import Report from '../components/Report'

const ReportContainer = props => {
  const userId = props.match.params.userId
  const [accounts, setAccounts] = useState([])
  const [profile, setProfile] = useState({})

  useEffect(() => {
    const fetchAccounts = async () => {
      const results = await api.getAccounts(userId)
      const resp = await api.getProfiles(userId)

      setAccounts(results)
      setProfile(resp)
    }
    fetchAccounts()
  }, [userId])

  console.log(profile)
  const {
    first_name,
    last_name,
    full_name,
    email,
    phone_number,
    picture_url,
    address
  } = profile

  return (
    <Report
      fullName={full_name}
      image={picture_url}
      accounts={accounts}
      email={email}
      phoneNumber={phone_number}
      address={address}
    />
  )
}

export default ReportContainer
