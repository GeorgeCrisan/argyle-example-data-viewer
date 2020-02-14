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

const renderProfileDetails = ({
  image,
  fullName,
  email,
  phoneNumber,
  address
}) => [
  {
    label: 'Email',
    value: email
  },
  {
    label: 'Phone number',
    value: phoneNumber
  },
  {
    label: 'City',
    value: address.city
  },
  {
    label: 'Line1',
    value: address.line1
  },
  {
    label: 'Line2',
    value: address.line2
  },
  {
    label: 'State',
    value: address.state
  },
  {
    label: 'Country',
    value: address.country
  },
  {
    label: 'Postal Code',
    value: address.postal_code
  }
]

const Profile = ({ image, fullName, email, phoneNumber, address }) => (
  <StyledProfile>
    <Image src={image} />
    <ProfileDetails>
      <Name>{fullName}</Name>
      {renderProfileDetails({
        image,
        fullName,
        email,
        phoneNumber,
        address
      }).map(({ label, value }, i) => (
        <DetailWrapper key={`${label}${i}`}>
          <DetailLabel>{label}:</DetailLabel>
          <Detail>{value}</Detail>
        </DetailWrapper>
      ))}
    </ProfileDetails>
  </StyledProfile>
)

export default Profile
