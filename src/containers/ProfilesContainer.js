import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../api/api'
import Spinner from '../components/Spinner'
import Profile from '../components/Profile'

const StyledSpinner = styled.div`
  min-height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProfilesContainer = ({ accountId }) => {
  const [profile, setProfile] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true)
      const profileResponse = await api.getProfile(accountId)
      setLoading(false)

      setProfile(profileResponse)
    }
    fetchProfile()
  }, [accountId])

  if (!profile || isLoading)
    return (
      <StyledSpinner>
        <Spinner />
      </StyledSpinner>
    )
  const { full_name, email, phone_number, picture_url, address } = profile

  return (
    <Profile
      image={picture_url}
      fullName={full_name}
      email={email}
      phoneNumber={phone_number}
      address={address}
    />
  )
}

export default ProfilesContainer
