import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import api from '../api/api'
import Profiles from './ProfilesContainer'
import Activities from './ActivitiesContainer'
import Vehicles from './VehiclesContainer'
import Documents from './DocumentsContainer'
import Incomes from './IncomesContainer'
import Careers from './CareersContainer'
import Reputations from './ReputationsContainer'
import Spinner from '../components/Spinner'
import PageContent from '../components/PageContent'

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
    navLinkName: 'Profile'
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
    path: `/user-data/${userId}/reputations`,
    component: Reputations,
    navLinkName: 'Reputation'
  },
  {
    path: `/user-data/${userId}/activities`,
    component: Activities,
    navLinkName: 'Activities'
  },
  {
    path: `/user-data/${userId}/incomes`,
    component: Incomes,
    navLinkName: 'Income'
  },
  {
    path: `/user-data/${userId}/careers`,
    component: Careers,
    navLinkName: 'Career'
  }
]

const StyledPageContent = styled.div`
  margin-top: 2rem;
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
    <PageWrapper showSignOutButton userName={'Rachel Wallace'}>
      <StyledPageContent>
        <PageContent
          routes={getRoutes()}
          accounts={accounts}
          selectAccount={selectAccount}
          selectedAccount={selectedAccount}
          renderRoutes={renderRoutes}
          userId={userId}
        />
      </StyledPageContent>
    </PageWrapper>
  )
}

export default NavigationContainer
