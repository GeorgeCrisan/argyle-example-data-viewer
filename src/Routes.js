import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserDetailsContainer from './containers/UserDetailsContainer'
import UserListContainer from './containers/UserListContainer'
import SignInContainer from './containers/SignInContainer'
import NavigationContainer from './containers/NavigationContainer'
import SecureRoute from './components/SecureRoute'

const Routes = () => (
  <Router>
    <Switch>
      <SecureRoute exact path="/" component={UserListContainer} />
      <Route exact path="/sign-in" component={SignInContainer} />
      <Route exact path="/start" component={UserDetailsContainer} />
      <SecureRoute
        exact
        path="/user-data/:userId/:endpoint?"
        component={NavigationContainer}
      />
    </Switch>
  </Router>
)

export default Routes
