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

  const mockProfiles = [
    {
      id: 'c3950afe-93d5-4932-967c-796283426779',
      full_name: 'Rachel Wallace',
      email: 'rachel@gmail.com',
      phone_number: '+19129413464',
      birth_date: null,
      picture_url:
        'https://res.cloudinary.com/argyle-media/image/upload/v1587463764/rachel.jpg',
      address: {
        city: 'BRONX',
        line1: '2410 Green Blvd',
        line2: null,
        state: 'CA',
        country: 'US',
        postal_code: '83131',
      },
      account: '6145982b-2003-450f-aebf-323db5847dc6',
    },
    {
      id: 'e294e6fa-12e7-48d9-97fd-3b79ef0d29e8',
      full_name: 'Rachel Wallace',
      email: 'rachel@gmail.com',
      phone_number: '+19148762532',
      birth_date: null,
      picture_url:
        'https://res.cloudinary.com/argyle-media/image/upload/v1587463764/rachel.jpg',
      address: {
        city: 'BRONX',
        line1: '2410 Green Blvd',
        line2: null,
        state: 'CA',
        country: 'US',
        postal_code: '83131',
      },
      account: '66d5cc76-deff-4814-a02c-af5e59c48968',
    },
  ]
  const x = selectedAccount.id === 'combined' ? mockProfiles : [mockProfiles[0]]

  return x.map(
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
