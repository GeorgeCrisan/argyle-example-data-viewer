import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserDetailsContainer from '../containers/UserDetailsContainer'
import UserListContainer from '../containers/UserListContainer'
import ReportContainer from '../containers/ReportContainer'
import SignInContainer from '../containers/SignInContainer'
import SecureRoute from './SecureRoute'

const App = () => (
  <Router>
    <Switch>
      <SecureRoute exact path="/" component={UserListContainer} />
      <Route exact path="/sign-in" component={SignInContainer} />
      <Route exact path="/start" component={UserDetailsContainer} />
      <SecureRoute exact path="/reports/:userId" component={ReportContainer} />
    </Switch>
  </Router>
)

export default App
