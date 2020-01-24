import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserDetailsContainer from '../containers/UserDetailsContainer'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        Main
      </Route>
      <Route exact path="/start" component={UserDetailsContainer} />
    </Switch>
  </Router>
)

export default App
