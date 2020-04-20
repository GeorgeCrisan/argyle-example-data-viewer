import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { firstWordToUpperCase } from '../helpers'

const StyledCareers = styled.div`
  max-width: 90rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`

const StyledCareer = styled.div`
  border-radius: 5px;
  margin-right: 4rem;
  margin-bottom: 4rem;
  min-width: 23rem;
  ${({ greyBackground }) =>
    greyBackground &&
    `
    background-color: rgba(249, 249, 249, 0.9);
    padding: 1.6rem 2rem;
    `}
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
`

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

const Career = ({ careers }) => (
  <StyledCareers>
    {careers.map(
      (
        {
          length_of_work,
          first_activity_date,
          id,
          account,
          type,
          total_hours_spent_working,
          last_activity_date,
        },
        i
      ) => (
        <StyledCareer greyBackground={careers.length > 1} key={id + i}>
          {!!careers.length > 1 && (
            <Title>
              {type === 'combined' ? 'Combined' : firstWordToUpperCase(account)}
            </Title>
          )}
          <CareerItem>
            <TotalHours>{`${total_hours_spent_working || 0} hours`}</TotalHours>
            <Label>Total hours working</Label>
          </CareerItem>

          <CareerItem>
            <Value>{`${
              length_of_work ? Math.round(length_of_work) : 0
            } days`}</Value>
            <Label>Length of work</Label>
          </CareerItem>

          <CareerItem>
            <Value>
              {first_activity_date
                ? moment(first_activity_date).format('MMM D, YYYY')
                : '-'}
            </Value>
            <Label>First activity date</Label>
          </CareerItem>

          <CareerItem>
            <Value>
              {last_activity_date
                ? moment(last_activity_date).format('MMM D, YYYY')
                : '-'}
            </Value>
            <Label>Last activity date</Label>
          </CareerItem>
        </StyledCareer>
      )
    )}
  </StyledCareers>
)

export default Career
