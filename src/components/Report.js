import React from 'react'
import styled from 'styled-components'

const StyledReport = styled.div``

const CenteredContainer = styled.div`
  margin: 10rem auto;
  max-width: 60rem;
  display: flex;
  flex-direction: column;
`

const Account = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`

const DataPartnerLogo = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`

const PartnerName = styled.span`
  font-size: 24px;
`

const Profile = styled.div`
  display: flex;
`

const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
  margin-right: 20px;
`

const ProfileDetails = styled.div``

const Detail = styled.div`
  font-size: 24px;
`

const Name = styled.h3`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: bold;
  font-size: 32px;
`

const DataPartnets = styled.div``

const Activities = styled.div`
  display: flex;
`

const ActivityColumn = styled.div``

const ActivityTitle = styled.div``

const Activity = styled.div``

const Report = ({
  account,
  image,
  fullName,
  email,
  phoneNumber,
  address,
  activities
}) => (
  <StyledReport>
    <CenteredContainer>
      <Account key={account.id}>
        <DataPartnerLogo
          alt={account.data_partner}
          src={`https://storage.googleapis.com/argyle-api-media/images/${account.data_partner}.png`}
        />
        <PartnerName>{account.data_partner}</PartnerName>
      </Account>
      <Profile>
        <Image src={image} />
        <ProfileDetails>
          <Name>{fullName}</Name>
          <Detail>{email}</Detail>
          <Detail>{phoneNumber}</Detail>
          <Detail>{address.city}</Detail>
          <Detail>{address.line1}</Detail>
          <Detail>{address.line2}</Detail>
          <Detail>{address.state}</Detail>
          <Detail>{address.country}</Detail>
          <Detail>{address.postal_code}</Detail>
        </ProfileDetails>
      </Profile>
      <Activities>
        {activities.map(({ start_date, type, status, income }) => (
          <>
            <Activity>{start_date}</Activity>
            <Activity>{type}</Activity>
            <Activity>{status}</Activity>
            <Activity>
              {income.total_charge}
              {income.currency}
            </Activity>
          </>
        ))}
      </Activities>
    </CenteredContainer>
  </StyledReport>
)

export default Report
