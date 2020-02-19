import React, { Component } from 'react'
import { signIn } from '../api'
import api from '../api/api'
import SignIn from '../components/SignIn'

class SignInContainer extends Component {
  state = {
    email: '',
    password: ''
  }

  onInputChange = e => this.setState({ [e.target.name]: e.target.value })

  signIn = async e => {
    e.preventDefault()
    const { email, password } = this.state
    const { history } = this.props

    signIn({ email, password })
    api.setAuthCredentials({ email, password })
    history.push('/')
  }

  render() {
    const { email, password } = this.state

    return (
      <SignIn
        onInputChange={this.onInputChange}
        onSubmit={this.signIn}
        email={email}
        password={password}
      />
    )
  }
}

export default SignInContainer
