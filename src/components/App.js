import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserDetailsContainer from '../containers/UserDetailsContainer'
import Report from './Report'

import UserList from './UserList'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <UserList />
      </Route>
      <Route exact path="/start" component={UserDetailsContainer} />
      <Route exact path="/reports/:userId" component={Report} />
    </Switch>
  </Router>
)

export default App
