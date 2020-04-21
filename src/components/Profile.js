import React from 'react'
import styled from 'styled-components'

const StyledProfile = styled.div`
  display: flex;
`

const Image = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-right: 4rem;

  ${({ image }) =>
    image
      ? `
      background-image: url(${image});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  `
      : `
        background-color: rgba(0, 0, 0, 0.1);
      `}
`

const ProfileDetails = styled.div``

const DetailWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

const DetailLabel = styled.div`
  font-size: 1.6rem;
  margin-right: 3rem;
  color: rgba(0, 0, 0, 0.4);
  min-width: 10.4rem;
`

const Detail = styled.div`
  font-size: 1.6rem;
`

const Name = styled.h3`
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 2rem;
`

const renderProfileDetails = ({ email, phoneNumber, address }) => [
  {
    label: 'Email',
    value: email,
  },
  {
    label: 'Phone number',
    value: phoneNumber,
  },
  {
    label: 'City',
    value: address.city,
  },
  {
    label: 'Line1',
    value: address.line1,
  },
  {
    label: 'Line2',
    value: address.line2,
  },
  {
    label: 'State',
    value: address.state,
  },
  {
    label: 'Country',
    value: address.country,
  },
  {
    label: 'Postal Code',
    value: address.postal_code,
  },
]

const Profile = ({ image, fullName, email, phoneNumber, address }) => (
  <StyledProfile>
    <Image image={image} />
    <ProfileDetails>
      <Name>{fullName}</Name>
      {renderProfileDetails({
        email,
        phoneNumber,
        address,
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
