import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Switch, Route, NavLink } from 'react-router-dom'
import api from '../api/api'
import Profiles from './ProfilesContainer'
import Activities from './ActivitiesContainer'
import Vehicles from './VehiclesContainer'
import Documents from './DocumentsContainer'
import Incomes from './IncomesContainer'
import Careers from './CareersContainer'
import Reputations from './ReputationsContainer'

const renderRoutes = userId => [
  {
    path: `/user-data/${userId}`,
    component: Profiles
  },
  {
    path: `/user-data/${userId}/profiles`,
    component: Profiles,
    navLinkName: 'Profiles'
  },
  {
    path: `/user-data/${userId}/activities`,
    component: Activities,
    navLinkName: 'Activities'
  },
  {
    path: `/user-data/${userId}/vehicles`,
    component: Vehicles,
    navLinkName: 'Vehicles'
  },
  {
    path: `/user-data/${userId}/documents`,
    component: Documents,
    navLinkName: 'Documents'
  },
  {
    path: `/user-data/${userId}/incomes`,
    component: Incomes,
    navLinkName: 'Incomes'
  },
  {
    path: `/user-data/${userId}/careers`,
    component: Careers,
    navLinkName: 'Careers'
  },
  {
    path: `/user-data/${userId}/reputations`,
    component: Reputations,
    navLinkName: 'Reputations'
  }
]

const TopNavigation = styled.div`
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 1;
  display: flex;
  align-items: center;
  box-shadow: 3px -1px 33px -5px rgba(0, 0, 0, 0.12);
`

const NavItems = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30rem;
`

const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 3rem;
  padding: 0.6rem;
  ${({ active }) =>
    active
      ? 'border-bottom: 6px solid #86a9ad;'
      : 'border-bottom: 6px solid white;'}
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

const Content = styled.div`
  height: 100%;
  background-color: white;
  margin: 8rem 2rem 2rem 27rem;
  padding: 2rem;
`

const LeftNavigation = styled.div`
  background-color: white;
  width: 25rem;
  padding-top: 60px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  box-shadow: 9px 75px 33px -5px rgba(0, 0, 0, 0.08);
`

const LeftNavItems = styled.div`
  padding: 2rem;
`

const StyledNavLink = styled(NavLink)`
  display: block;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.8rem;
  cursor: pointer;
  margin-bottom: 0.8rem;
  font-family: 'Roboto', sans-serif;

  &.selected {
    font-weight: 600;
  }

  &:hover {
    text-decoration: none;
    color: #86a9ad;
  }
`

const NavigationContainer = ({ match }) => {
  const { userId } = match.params
  const [accounts, setAccounts] = useState([])
  const [selectedAccountId, selectAccount] = useState(null)

  useEffect(() => {
    const fetchAccounts = async () => {
      const results = await api.getAccounts(userId)

      setAccounts(results)
      selectAccount(results[0].id)
    }
    fetchAccounts()
  }, [userId])

  const getRoutes = () => (
    <Route
      path="/user-data/:userId"
      render={props => (
        <Switch>
          {renderRoutes(userId).map(({ path, component: Component }) => (
            <Route
              key={path}
              exact
              path={path}
              render={routeProps => (
                <Component
                  {...props}
                  {...routeProps}
                  accountId={selectedAccountId}
                />
              )}
            />
          ))}
        </Switch>
      )}
    />
  )

  return (
    <div>
      <TopNavigation>
        <NavItems>
          {accounts.map(({ id, data_partner }) => (
            <NavItem
              active={selectedAccountId === id}
              onClick={() => selectAccount(id)}
              key={id}
            >
              <DataPartnerLogo
                alt={data_partner}
                src={`https://storage.googleapis.com/argyle-api-media/images/${data_partner}.png`}
              />
              <PartnerName>{data_partner}</PartnerName>
            </NavItem>
          ))}
        </NavItems>
      </TopNavigation>
      <LeftNavigation>
        <LeftNavItems>
          {renderRoutes(userId).map(({ path, navLinkName }) => (
            <StyledNavLink key={path} to={path} activeClassName="selected">
              {navLinkName}
            </StyledNavLink>
          ))}
        </LeftNavItems>
      </LeftNavigation>
      <Content>{getRoutes()}</Content>
    </div>
  )
}

export default NavigationContainer