import React, { Component } from 'react'
import { signIn } from '../api'
import api from '../api/api'
import SignIn from '../components/SignIn'

class SignInContainer extends Component {
  state = {
    clientId: '',
    clientSecret: ''
  }

  onInputChange = e => this.setState({ [e.target.name]: e.target.value })

  signIn = async e => {
    e.preventDefault()
    const { clientId, clientSecret } = this.state
    const { history } = this.props

    signIn({ clientId, clientSecret })
    api.setAuthCredentials({ clientId, clientSecret })
    history.push('/')
  }

  render() {
    const { clientId, clientSecret } = this.state

    return (
      <SignIn
        onInputChange={this.onInputChange}
        onSubmit={this.signIn}
        clientId={clientId}
        clientSecret={clientSecret}
      />
    )
  }
}

export default SignInContainer
