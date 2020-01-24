import React, { Component } from 'react'
import UserDetails from '../components/UserDetails'
import firebase from '../helpers/firebase'

class UserDetailsContainer extends Component {
  state = {
    email: '',
    fullName: ''
  }

  componentDidMount() {
    if (!localStorage.getItem('uid')) {
      const auth = firebase.auth()

      auth.signInAnonymously().catch(error => {
        console.log({ error })
      })

      auth.onAuthStateChanged(user => {
        if (user) {
          const { uid } = user
          localStorage.setItem('uid', uid)
        }
      })
    }
  }

  onInputChange = e => this.setState({ [e.target.name]: e.target.value })

  onSubmit = e => {
    e.preventDefault()
    const { email, fullName } = this.state
    const database = firebase.database()
    const uid = localStorage.getItem('uid')

    if (!email && !fullName) return

    window.initArgyle().open()
    window.userCreated = ({ userToken, userId }) => {
      database.ref(`user-details/${userId}`).set({
        uid,
        email,
        fullName,
        userId,
        userToken
      })
    }
  }

  render() {
    const { email, fullName } = this.state

    return (
      <UserDetails
        onInputChange={this.onInputChange}
        onSubmit={this.onSubmit}
        email={email}
        fullName={fullName}
      />
    )
  }
}

export default UserDetailsContainer
