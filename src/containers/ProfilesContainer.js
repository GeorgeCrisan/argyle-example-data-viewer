import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../api/api'
import Spinner from '../components/Spinner'
import Profile from '../components/Profile'

const StyledSpinner = styled.div`
  min-height: 30rem;
  min-width: 50rem;
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
      const profilesResponse =
        selectedAccount.id === 'combined'
          ? await api.getProfiles({
              userId: selectedAccount.userId
            })
          : await api.getProfiles({
              accountId: selectedAccount.id
            })

      setError(!profilesResponse.length)
      setLoading(false)
      setProfiles(profilesResponse)
    }
    fetchProfile()
  }, [selectedAccount.id, selectedAccount.userId])

  if (!profiles || isLoading)
    return (
      <StyledSpinner>
        <Spinner />
      </StyledSpinner>
    )

  if (isError) {
    return (
      <Error>
        Status: {selectedAccount.status} {selectedAccount.error_code}, No Data
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
