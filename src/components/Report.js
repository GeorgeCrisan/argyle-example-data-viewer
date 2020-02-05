import React from 'react'
import styled from 'styled-components'

const StyledReport = styled.div``

const CenteredContainer = styled.div`
  margin: 10rem auto;
  max-width: 60rem;
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  align-items: center;
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

const Report = ({ accounts, image, fullName, email, phoneNumber, address }) => (
  <StyledReport>
    <CenteredContainer>
      <Profile>
        <Image src={image} />
        <ProfileDetails>
          <Name>{fullName}</Name>
          <Detail>{email}</Detail>
          <Detail>{phoneNumber}</Detail>
        </ProfileDetails>
      </Profile>
      <DataPartnets>
        {accounts.map(account => (
          <Row key={account.id}>
            <DataPartnerLogo
              alt={account.data_partner}
              src={`https://storage.googleapis.com/argyle-api-media/images/${account.data_partner}.png`}
            />
            <PartnerName>{account.data_partner}</PartnerName>
          </Row>
        ))}
      </DataPartnets>
    </CenteredContainer>
  </StyledReport>
)

export default Report
