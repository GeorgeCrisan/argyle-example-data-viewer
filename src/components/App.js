import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserDetailsContainer from '../containers/UserDetailsContainer'
import UserListContainer from '../containers/UserListContainer'
import ReportContainer from '../containers/ReportContainer'
import SignInContainer from '../containers/SignInContainer'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={UserListContainer} />
      <Route exact path="/sign-in" component={SignInContainer} />
      <Route exact path="/start" component={UserDetailsContainer} />
      <Route exact path="/reports/:userId" component={ReportContainer} />
    </Switch>
  </Router>
)

export default App
