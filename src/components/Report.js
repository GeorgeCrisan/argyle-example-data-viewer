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

const Section = styled.div`
  margin: 2rem 0 0 0;
  text-align: center;
`

const ToggleButton = styled.button`
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
  vehicles,
  documents,
  incomes,
  careers
}) => {
  const [showActivities, toggleShowActivities] = useState(false)
  const [showVehicles, toggleVehicles] = useState(false)
  const [showDocuments, toggleDocuments] = useState(false)
  const [showIncomes, toggleIncomes] = useState(false)
  const [showCareers, toggleCareers] = useState(false)

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

        <Section>
          <ToggleButton onClick={() => toggleShowActivities(!showActivities)}>
            {showActivities ? 'hide activities' : 'show activities'}
          </ToggleButton>
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
        </Section>

        <Section>
          <ToggleButton onClick={() => toggleVehicles(!showVehicles)}>
            {showVehicles ? 'hide vehicles' : 'show vehicles'}
          </ToggleButton>
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
        </Section>

        <Section>
          <ToggleButton onClick={() => toggleDocuments(!showDocuments)}>
            {showDocuments ? 'hide documents' : 'show documents'}
          </ToggleButton>
          {showDocuments && (
            <Table
              headerItems={[
                'Document Number',
                'Document Type',
                'Expiration Date',
                'Created At'
              ]}
              items={documents.map(
                ({
                  id,
                  document_number,
                  document_type,
                  expiration_date,
                  created_at
                }) => ({
                  id,
                  document_number,
                  document_type,
                  expiration_date: expiration_date
                    ? new Date(expiration_date).toDateString()
                    : null,
                  created_at: new Date(created_at).toDateString()
                })
              )}
            />
          )}
        </Section>

        <Section>
          <ToggleButton onClick={() => toggleIncomes(!showIncomes)}>
            {showIncomes ? 'hide incomes' : 'show incomes'}
          </ToggleButton>
          {showIncomes && (
            <Table
              headerItems={[
                'Pay',
                'Tips',
                'Bonus',
                'Fees',
                'Total',
                'Currency'
              ]}
              items={incomes.map(
                ({ id, pay, tips, bonus, fees, total, currency }) => ({
                  id,
                  pay,
                  tips,
                  bonus,
                  fees,
                  total,
                  currency
                })
              )}
            />
          )}
        </Section>

        <Section>
          <ToggleButton onClick={() => toggleCareers(!showCareers)}>
            {showCareers ? 'hide careers' : 'show careers'}
          </ToggleButton>
          {showCareers && (
            <Table
              headerItems={[
                'Total Hours Working',
                'First Activity Date',
                'Last Activity Date',
                'Length of work (Days)'
              ]}
              items={careers.map(
                ({
                  id,
                  total_hours_spent_working,
                  first_activity_date,
                  last_activity_date,
                  length_of_work
                }) => ({
                  id,
                  total_hours_spent_working,
                  first_activity_date: new Date(
                    first_activity_date
                  ).toDateString(),
                  last_activity_date: new Date(
                    last_activity_date
                  ).toDateString(),
                  length_of_work
                })
              )}
            />
          )}
        </Section>
      </CenteredContainer>
    </StyledReport>
  )
}

export default Report
