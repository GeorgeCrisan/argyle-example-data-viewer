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
import Spinner from '../components/Spinner'

const StyledSpinner = styled.div`
  min-height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

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
  justify-content: space-between;
  box-shadow: 3px -1px 33px -5px rgba(0, 0, 0, 0.12);
`

const NavItems = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25rem;
`

const SignOutButton = styled.button`
  margin-right: 2rem;
  padding: 1rem 2rem;
  border-radius: 4px;
  background-color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 3rem;
  padding: 0.7rem;
  ${({ active }) =>
    active
      ? 'border-bottom: 5px solid #86a9ad;'
      : 'border-bottom: 5px solid white;'}
`

const DataPartnerLogo = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 15px;
`

const PartnerName = styled.span`
  font-size: 3.2rem;
  font-weight: 500;
`

const AccountsTitle = styled.div`
  font-size: 2.8rem;
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
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  box-shadow: 9px 75px 33px -5px rgba(0, 0, 0, 0.08);
`

const BackButton = styled.div`
  padding: 2rem;
  cursor: pointer;
  font-size: 2.4rem;
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

const NavigationContainer = ({ match, history }) => {
  const { userId } = match.params
  const [accounts, setAccounts] = useState([])
  const [selectedAccount, selectAccount] = useState({})
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAccounts = async () => {
      setLoading(true)
      const results = await api.getAccounts(userId)

      if (!results.length) {
        setAccounts([])
        selectAccount(null)
        return
      }

      setAccounts(results)
      selectAccount(results[0])
      setLoading(false)
    }
    fetchAccounts()
  }, [userId])

  if (isLoading) {
    return (
      <StyledSpinner>
        <Spinner />
      </StyledSpinner>
    )
  }

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
                  selectedAccount={selectedAccount}
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
          {!accounts.length ? (
            <AccountsTitle>No Accounts connected</AccountsTitle>
          ) : (
            accounts.map(({ id, data_partner }) => (
              <NavItem
                active={selectedAccount.id === id}
                onClick={() => selectAccount(id)}
                key={id}
              >
                <DataPartnerLogo
                  alt={data_partner}
                  src={`https://storage.googleapis.com/argyle-api-media/images/${data_partner}.png`}
                />
                <PartnerName>{data_partner}</PartnerName>
              </NavItem>
            ))
          )}
        </NavItems>
        <SignOutButton
          onClick={() => {
            localStorage.removeItem('clientID')
            localStorage.removeItem('clientSecret')
            history.push('/sign-in')
          }}
        >
          Sign Out
        </SignOutButton>
      </TopNavigation>
      <LeftNavigation>
        <BackButton onClick={() => history.push('/')}>Go Back</BackButton>
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
