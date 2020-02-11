import React from 'react'
// import { Redirect } from 'react-router'
import { Route, Redirect } from 'react-router-dom'

const SecureRoute = ({ component: Component, path, exact }) => {
  const hasToken =
    !!localStorage.getItem('userToken') &&
    !!localStorage.getItem('userToken').length

  if (!hasToken) {
    return <Redirect to="/sign-in" />
  }

  return (
    <Route
      path={path}
      exact={exact}
      render={props => <Component {...props} />}
    />
  )
}

export default SecureRoute
