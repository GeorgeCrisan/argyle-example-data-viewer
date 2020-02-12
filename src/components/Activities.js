import React from 'react'
import styled from 'styled-components'

const StyledActivities = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 1.5rem;
`

const HeaderItem = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
`

const Activity = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

const ActivityItem = styled.div`
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 1.5rem;
`

const Activities = ({ activities }) => (
  <StyledActivities>
    <Header>
      <HeaderItem>Start Date</HeaderItem>
      <HeaderItem>Type</HeaderItem>
      <HeaderItem>Status</HeaderItem>
      <HeaderItem>Income</HeaderItem>
    </Header>
    {activities.map(({ start_date, type, status, income, id }) => (
      <Activity key={id}>
        <ActivityItem>{new Date(start_date).toDateString()}</ActivityItem>
        <ActivityItem>{type}</ActivityItem>
        <ActivityItem>{status}</ActivityItem>
        <ActivityItem>
          {income.total_charge}
          {income.currency}
        </ActivityItem>
      </Activity>
    ))}
  </StyledActivities>
)

export default Activities
