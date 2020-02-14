import React, { useState } from 'react'
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
  font-size: ${({ expanded }) => (expanded ? '1.4rem' : '1.6rem')};
  font-weight: 600;
  text-align: center;
`

const Activity = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  cursor: pointer;
`

const ItemValue = styled.div`
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 1.5rem;
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  ${({ header }) => header && 'height: 2px;'}
`

const headerItems = ['Start Date', 'Type', 'Status', 'Income']

const Activities = ({ activities }) => {
  const [activityExpandedId, expandActivity] = useState(null)

  return (
    <StyledActivities>
      <Header columns={headerItems.length}>
        {headerItems.map((item, i) => (
          <HeaderItem key={`${item}${i}`}>{item}</HeaderItem>
        ))}
      </Header>
      <Divider header />
      {activities.map(
        ({
          id,
          start_date,
          type,
          status,
          income,
          start_location,
          end_location,
          distance,
          num_tasks,
          extra,
          timezone
        }) => (
          <div key={id}>
            <Activity onClick={() => expandActivity(id)}>
              <ItemValue>{new Date(start_date).toDateString()}</ItemValue>
              <ItemValue>{type}</ItemValue>
              <ItemValue>{status}</ItemValue>
              <ItemValue>{`${income.total_charge} ${income.currency}`}</ItemValue>
            </Activity>

            {activityExpandedId === id && (
              <>
                <Header>
                  <HeaderItem expanded>Start Location</HeaderItem>
                  <HeaderItem expanded>End Location</HeaderItem>
                  <HeaderItem expanded>Distance</HeaderItem>
                  <HeaderItem expanded>Number of tasks</HeaderItem>
                </Header>
                <Activity>
                  <ItemValue>
                    {start_location && (
                      <>
                        {start_location.formatted_address && (
                          <ItemValue>
                            {start_location.formatted_address}
                          </ItemValue>
                        )}
                        <ItemValue>{`lat: ${start_location.lat}`}</ItemValue>
                        <ItemValue>{`lng: ${start_location.lng}`}</ItemValue>
                      </>
                    )}
                  </ItemValue>
                  <ItemValue>
                    {end_location && (
                      <>
                        {end_location.formatted_address && (
                          <ItemValue>
                            {end_location.formatted_address}
                          </ItemValue>
                        )}
                        <ItemValue>{`lat: ${end_location.lat}`}</ItemValue>
                        <ItemValue>{`lng: ${end_location.lng}`}</ItemValue>
                      </>
                    )}
                  </ItemValue>
                  <ItemValue>{distance} miles</ItemValue>
                  <ItemValue>{num_tasks}</ItemValue>
                </Activity>

                <Header>
                  <HeaderItem expanded>Fees</HeaderItem>
                  <HeaderItem expanded>Tips</HeaderItem>
                  <HeaderItem expanded>Bonus</HeaderItem>
                  <HeaderItem expanded>Total</HeaderItem>
                </Header>
                <Activity>
                  {income && (
                    <>
                      <ItemValue>
                        {income.fees} {income.currency}
                      </ItemValue>
                      <ItemValue>
                        {income.tips} {income.currency}
                      </ItemValue>
                      <ItemValue>
                        {income.bonus} {income.currency}
                      </ItemValue>
                      <ItemValue>
                        {income.total} {income.currency}
                      </ItemValue>
                    </>
                  )}
                </Activity>

                <Header>
                  <HeaderItem expanded>Pick up at</HeaderItem>
                  <HeaderItem expanded>Drop off at</HeaderItem>
                  <HeaderItem expanded>Request at</HeaderItem>
                  <HeaderItem expanded>Service Type</HeaderItem>
                </Header>
                <Activity>
                  {extra && (
                    <>
                      <ItemValue>{extra.pickup_at}</ItemValue>
                      <ItemValue>{extra.dropoff_at}</ItemValue>
                      <ItemValue>{extra.request_at}</ItemValue>
                      <ItemValue>{extra.service_type}</ItemValue>
                    </>
                  )}
                </Activity>

                <Header>
                  <HeaderItem expanded>Timezone</HeaderItem>
                </Header>
                <Activity>
                  <ItemValue>{timezone}</ItemValue>
                </Activity>
              </>
            )}

            <Divider />
          </div>
        )
      )}
    </StyledActivities>
  )
}

export default Activities
