import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserDetailsContainer from '../containers/UserDetailsContainer'
import UserListContainer from '../containers/UserListContainer'
import Report from './Report'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={UserListContainer} />
      <Route exact path="/start" component={UserDetailsContainer} />
      <Route exact path="/reports/:userId" component={Report} />
    </Switch>
  </Router>
)

export default App
