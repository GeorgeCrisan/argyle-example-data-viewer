import React, { useState } from 'react'
import styled from 'styled-components'
import Profile from './Profile'
import Table from './Table'

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

const StyledProfile = styled.div`
  margin-bottom: 3rem;
`

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
`

const StyledActivities = styled.div`
  margin: 2rem 0;
  text-align: center;
`

const ActivitiesButton = styled.button`
  margin-bottom: 2.5rem;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  width: 100%;

  &:focus {
    outline: none;
  }
`

const Report = ({
  account,
  image,
  fullName,
  email,
  phoneNumber,
  address,
  activities,
  vehicles
}) => {
  const [showActivities, toggleShowActivities] = useState(false)
  const [showVehicles, toggleVehicles] = useState(false)

  return (
    <StyledReport>
      <CenteredContainer>
        <Account key={account.id}>
          <DataPartnerLogo
            alt={account.data_partner}
            src={`https://storage.googleapis.com/argyle-api-media/images/${account.data_partner}.png`}
          />
          <PartnerName>{account.data_partner}</PartnerName>
        </Account>
        <StyledProfile>
          <Profile
            image={image}
            fullName={fullName}
            email={email}
            phoneNumber={phoneNumber}
            address={address}
          />
        </StyledProfile>

        <Divider />

        <StyledActivities>
          <ActivitiesButton
            onClick={() => toggleShowActivities(!showActivities)}
          >
            {showActivities ? 'hide activities' : 'show activities'}
          </ActivitiesButton>
          {showActivities && (
            <Table
              headerItems={['Start Date', 'Type', 'Status', 'Income']}
              items={activities.map(
                ({ id, start_date, type, status, income }) => ({
                  id,
                  start_date: new Date(start_date).toDateString(),
                  type,
                  status,
                  income: `${income.total_charge} ${income.currency}`
                })
              )}
            />
          )}
        </StyledActivities>

        <StyledActivities>
          <ActivitiesButton onClick={() => toggleVehicles(!showVehicles)}>
            {showVehicles ? 'hide vehicles' : 'show vehicles'}
          </ActivitiesButton>
          {showVehicles && (
            <Table
              headerItems={['Make', 'Model', 'Year', 'Identification']}
              items={vehicles.map(
                ({ id, make, model, year, identification }) => ({
                  id,
                  make,
                  model,
                  year,
                  identification
                })
              )}
            />
          )}
        </StyledActivities>
      </CenteredContainer>
    </StyledReport>
  )
}

export default Report
