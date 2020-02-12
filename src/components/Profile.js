import React from 'react'
import styled from 'styled-components'

const StyledProfile = styled.div`
  display: flex;
`

const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
  margin-right: 20px;
`

const ProfileDetails = styled.div``

const DetailWrapper = styled.div`
  display: flex;
  align-items: center;
`

const DetailLabel = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-right: 1rem;
`

const Detail = styled.div`
  font-size: 24px;
`

const Name = styled.h3`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: bold;
  font-size: 32px;
`

const Profile = ({ image, fullName, email, phoneNumber, address }) => (
  <StyledProfile>
    <Image src={image} />
    <ProfileDetails>
      <Name>{fullName}</Name>
      <DetailWrapper>
        <DetailLabel>Email:</DetailLabel>
        <Detail>{email}</Detail>
      </DetailWrapper>
      <DetailWrapper>
        <DetailLabel>Phone number:</DetailLabel>
        <Detail>{phoneNumber}</Detail>
      </DetailWrapper>
      <DetailWrapper>
        <DetailLabel>City:</DetailLabel>
        <Detail>{address.city}</Detail>
      </DetailWrapper>
      <DetailWrapper>
        <DetailLabel>Line1:</DetailLabel>
        <Detail>{address.line1}</Detail>
      </DetailWrapper>
      <DetailWrapper>
        <DetailLabel>Line2:</DetailLabel>
        <Detail>{address.line2}</Detail>
      </DetailWrapper>
      <DetailWrapper>
        <DetailLabel>State:</DetailLabel>
        <Detail>{address.state}</Detail>
      </DetailWrapper>
      <DetailWrapper>
        <DetailLabel>Country:</DetailLabel>
        <Detail>{address.country}</Detail>
      </DetailWrapper>
      <DetailWrapper>
        <DetailLabel>Postal Code:</DetailLabel>
        <Detail>{address.postal_code}</Detail>
      </DetailWrapper>
    </ProfileDetails>
  </StyledProfile>
)

export default Profile
