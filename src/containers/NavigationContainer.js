import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Switch, Route, NavLink } from 'react-router-dom'
import api from '../api/api'
import Activities from './ActivitiesContainer'

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

  const renderRoutes = () => (
    <Route
      path="/user-data/:userId"
      render={({ match }, props) => (
        <Switch>
          <Route
            exact
            path={`${match.url}`}
            render={() => (
              <Activities {...props} accountId={selectedAccountId} />
            )}
          />
          <Route
            exact
            path={`${match.url}/activities`}
            render={() => (
              <Activities {...props} accountId={selectedAccountId} />
            )}
          />
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
          <StyledNavLink
            to={`/user-data/${userId}/profiles`}
            activeClassName="selected"
          >
            Profiles
          </StyledNavLink>
          <StyledNavLink
            to={`/user-data/${userId}/activities`}
            activeClassName="selected"
          >
            Activities
          </StyledNavLink>
          <StyledNavLink
            to={`/user-data/${userId}/vehicles`}
            activeClassName="selected"
          >
            Vehicles
          </StyledNavLink>
          <StyledNavLink
            to={`/user-data/${userId}/documents`}
            activeClassName="selected"
          >
            Documents
          </StyledNavLink>
          <StyledNavLink
            to={`/user-data/${userId}/incomes`}
            activeClassName="selected"
          >
            Incomes
          </StyledNavLink>
          <StyledNavLink
            to={`/user-data/${userId}/careers`}
            activeClassName="selected"
          >
            Careers
          </StyledNavLink>
          <StyledNavLink
            to={`/user-data/${userId}/reputations`}
            activeClassName="selected"
          >
            Reputations
          </StyledNavLink>
        </LeftNavItems>
      </LeftNavigation>
      <Content>{renderRoutes()}</Content>
    </div>
  )
}

export default NavigationContainer
