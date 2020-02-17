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

const StyledProfile = styled.div`
  margin-bottom: 5rem;
`

const Error = styled.div`
  font-size: 2.4rem;
`

const ProfilesContainer = ({ selectedAccount }) => {
  const [profiles, setProfiles] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true)
      const profilesResponse = await api.getProfiles(selectedAccount.id)
      if (!profilesResponse.length) {
        setError(true)
      }

      setLoading(false)
      setProfiles(profilesResponse)
    }
    fetchProfile()
  }, [selectedAccount.id])

  if (!profiles || isLoading)
    return (
      <StyledSpinner>
        <Spinner />
      </StyledSpinner>
    )

  if (isError) {
    return (
      <Error>
        {selectedAccount.status} {selectedAccount.error_code}
      </Error>
    )
  }

  return profiles.map(
    ({ full_name, email, phone_number, picture_url, address, id }) => (
      <StyledProfile key={id}>
        <Profile
          image={picture_url}
          fullName={full_name}
          email={email}
          phoneNumber={phone_number}
          address={address}
        />
      </StyledProfile>
    )
  )
}

export default ProfilesContainer
