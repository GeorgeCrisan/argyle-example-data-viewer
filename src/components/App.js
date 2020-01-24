import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        Main
      </Route>
      <Route exact path="/start">
        Enter your details
      </Route>
    </Switch>
  </Router>
)

export default App
