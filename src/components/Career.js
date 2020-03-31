import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const StyledCareer = styled.div``

const CareerItem = styled.div`
  margin-bottom: 2rem;
`

const Value = styled.div`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 0.7rem;
`

const TotalHours = styled.div`
  font-size: 3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.defaultGreen};
`

const Label = styled.div`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.4);
`

const Career = ({ career }) => (
  <StyledCareer>
    <CareerItem>
      <TotalHours>{`${career.total_hours_spent_working} hours`}</TotalHours>
      <Label>Total hours working</Label>
    </CareerItem>

    <CareerItem>
      <Value>{`${career.length_of_work} days`}</Value>
      <Label>Length of work</Label>
    </CareerItem>

    <CareerItem>
      <Value>{moment(career.first_activity_date).format('MMM D, YYYY')}</Value>
      <Label>First activity date</Label>
    </CareerItem>

    <CareerItem>
      <Value>{moment(career.last_activity_date).format('MMM D, YYYY')}</Value>
      <Label>Last activity date</Label>
    </CareerItem>
  </StyledCareer>
)

export default Career
