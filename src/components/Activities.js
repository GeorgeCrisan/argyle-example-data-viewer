import React, { useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { firstWordToUpperCase } from '../helpers'

const StyledActivities = styled.div`
  display: flex;
  height: 100%;
`

const NavigationWrap = styled.div`
  position: relative;

  &:after {
    content: ' ';
    display: block;
    width: 2px;
    background-color: rgba(0, 0, 0, 0.05);
    position: absolute;
    right: 0;
    top: -4rem;
    bottom: -4rem;
  }
`

const Navigation = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  padding: 0 5.7rem 0 2rem;
  display: grid;
  grid-template-columns: 1;
  grid-gap: 2rem;
`

const NavItem = styled.div`
  position: relative;
  cursor: pointer;

  &:before {
    content: ' ';
    display: block;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    position: absolute;
    left: -2.5rem;
    top: 1.3rem;

    ${({ active, theme }) =>
      active
        ? `
        box-shadow: 0 0 0 6px rgba(64, 172, 116, 0.2);
        background-color: ${theme.colors.defaultGreen};
    `
        : `
        background-color: #d9d9d9;
    `}
  }
`

const NavDate = styled.div`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.4);
`

const NavTotal = styled.div`
  font-size: 1.4rem;
  ${({ active, theme }) => active && `color: ${theme.colors.defaultGreen};`}
`

const Content = styled.div`
  padding-left: 4rem;
`

const TopContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`

const DataPartnerLogo = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 1rem;
`

const TopContentItem = styled.div`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.4);
  margin-right: 1rem;
`

const HorizontalDivider = styled.div`
  height: 1px;
  width: 51px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 1.4rem;
`

const TotalTitle = styled.h3`
  font-size: 30px;
  font-weight: 500;
  margin: 0 0 0.8rem 0;
`

const TipsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.7rem;
`

const TipsItem = styled.div`
  font-size: 1.4rem;
  color: #4ea4d0;
  margin-right: 1rem;
`

const Activities = ({ activities }) => {
  const [activeId, setActiveId] = useState(activities[0].id)

  const selectedActivity = activities.find(activity => activity.id === activeId)

  return (
    <StyledActivities>
      <NavigationWrap>
        <Navigation>
          {activities.map(({ id, start_date, income }) => (
            <NavItem
              key={id}
              active={activeId === id}
              onClick={() => setActiveId(id)}
            >
              <NavDate>{moment(start_date).format('ddd MMM DD YYYY')}</NavDate>
              <NavTotal
                active={activeId === id}
              >{`${income.total} ${income.currency}`}</NavTotal>
            </NavItem>
          ))}
        </Navigation>
      </NavigationWrap>
      <Content>
        <TopContent>
          <DataPartnerLogo
            alt={selectedActivity.data_partner}
            src={`https://res.cloudinary.com/argyle-media/image/upload/c_lfill,w_auto,g_auto,q_auto,dpr_auto,f_auto/v1566809938/partner-logos/${selectedActivity.data_partner}.png`}
          />
          <TopContentItem>
            {firstWordToUpperCase(selectedActivity.type)}
          </TopContentItem>
          <TopContentItem>
            {firstWordToUpperCase(selectedActivity.status)}
          </TopContentItem>
          <TopContentItem>
            {moment(selectedActivity.end_date).format('ddd MMM DD YYYY')}
          </TopContentItem>
        </TopContent>
        <HorizontalDivider />
        <TotalTitle>
          {`$${selectedActivity.income.total} ${selectedActivity.income.currency}`}
        </TotalTitle>
        <TipsWrapper>
          <TipsItem>{`Tips $${selectedActivity.income.tips}`}</TipsItem>
          <TipsItem>{`Bonus $${selectedActivity.income.bonus}`}</TipsItem>
        </TipsWrapper>
      </Content>
    </StyledActivities>
  )
}

export default Activities
