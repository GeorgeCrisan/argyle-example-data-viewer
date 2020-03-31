import React, { useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'

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

const Content = styled.div``

const Activities = ({ activities }) => {
  const [activeId, setActiveId] = useState(activities[0].id)

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
      <Content></Content>
    </StyledActivities>
  )
}

export default Activities
