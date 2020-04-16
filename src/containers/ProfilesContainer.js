import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../api/api'
import { WrappedSpinner as Spinner } from '../components/Spinner'
import Profile from '../components/Profile'
import ErrorMsg from '../components/ErrorMsg'

const StyledProfile = styled.div`
  margin-bottom: 5rem;
`

const ProfilesContainer = ({ selectedAccount }) => {
  const [profiles, setProfiles] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true)
      const profilesResponse =
        selectedAccount.id === 'combined'
          ? await api.getProfiles({
              userId: selectedAccount.userId,
            })
          : await api.getProfiles({
              accountId: selectedAccount.id,
            })

      setError(!profilesResponse.length)
      setLoading(false)
      setProfiles(profilesResponse)
    }
    fetchProfile()
  }, [selectedAccount.id, selectedAccount.userId])

  if (!profiles || isLoading) return <Spinner />

  if (isError) {
    return <ErrorMsg selectedAccount={selectedAccount} />
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
