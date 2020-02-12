import React, { useState } from 'react'
import styled from 'styled-components'
import Profile from './Profile'
import Table from './Table'

const StyledReport = styled.div``

const Account = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  cursor: pointer;
  background-color: white;
  padding: 0.5rem;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

const DataPartnerLogo = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`

const PartnerName = styled.span`
  font-size: 32px;
  font-weight: 600;
`

const StyledProfile = styled.div`
  margin-bottom: 3rem;
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

const Achievements = styled.div`
  margin-top: 2rem;
`

const AchievementsTitle = styled.div`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-weight: 600;
  text-align: left;
`

const Achievement = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
`

const AchievementLabel = styled.div`
  margin-right: 2rem;
  font-weight: 500;
`

const AchievementDescription = styled.div``

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
  careers,
  reputations
}) => {
  const [showAccountDetails, toggleShowAccountDetails] = useState(false)
  const [showActivities, toggleShowActivities] = useState(false)
  const [showVehicles, toggleVehicles] = useState(false)
  const [showDocuments, toggleDocuments] = useState(false)
  const [showIncomes, toggleIncomes] = useState(false)
  const [showCareers, toggleCareers] = useState(false)
  const [showReputations, toggleReputations] = useState(false)

  return (
    <StyledReport>
      <Account onClick={() => toggleShowAccountDetails(!showAccountDetails)}>
        <DataPartnerLogo
          alt={account.data_partner}
          src={`https://storage.googleapis.com/argyle-api-media/images/${account.data_partner}.png`}
        />
        <PartnerName>{account.data_partner}</PartnerName>
      </Account>
      {showAccountDetails && (
        <>
          <StyledProfile>
            <Profile
              image={image}
              fullName={fullName}
              email={email}
              phoneNumber={phoneNumber}
              address={address}
            />
          </StyledProfile>

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

          <Section>
            <ToggleButton onClick={() => toggleReputations(!showReputations)}>
              {showReputations ? 'hide reputations' : 'show reputations'}
            </ToggleButton>
            {showReputations && (
              <>
                <Table
                  headerItems={['Rating', 'Acceptance Rate']}
                  items={reputations.map(({ id, rating, acceptance_rate }) => ({
                    id,
                    rating,
                    acceptance_rate
                  }))}
                  reputations={reputations.map(({ id, achievements }) => ({
                    id,
                    achievements
                  }))}
                />
                {reputations.map(
                  ({ id, achievements }) =>
                    achievements && (
                      <Achievements key={id}>
                        <AchievementsTitle>Achievements</AchievementsTitle>
                        {achievements.map(({ label, description }, i) => (
                          <Achievement key={`${label}${i}`}>
                            <AchievementLabel>{label}</AchievementLabel>
                            <AchievementDescription>
                              {description}
                            </AchievementDescription>
                          </Achievement>
                        ))}
                      </Achievements>
                    )
                )}
              </>
            )}
          </Section>
        </>
      )}
    </StyledReport>
  )
}

export default Report
