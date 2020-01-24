import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserDetailsContainer from '../containers/UserDetailsContainer'
import UserListContainer from '../containers/UserListContainer'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={UserListContainer} />
      <Route exact path="/start" component={UserDetailsContainer} />
    </Switch>
  </Router>
)

export default App
