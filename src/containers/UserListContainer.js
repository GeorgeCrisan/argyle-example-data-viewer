import React, { Component } from 'react'
import api from '../api/api'
import HomePage from '../components/HomePage'
import firebase from '../helpers/firebase'

class UserListContainer extends Component {
  state = {
    users: []
  }

  async componentDidMount() {
    const database = firebase.database()
    const results = await api.getUsers()
    // const profilesResponse = await api.getProfiles(selectedAccount.id)

    // console.log(results)

    let updatedUsers = []

    results.forEach(({ id }) => {
      database.ref(`user-details/${id}`).on('value', snapshot => {
        if (snapshot.val()) {
          updatedUsers.push(snapshot.val())
          console.log(snapshot.val())
          this.setState({ users: updatedUsers })
        }
      })
    })
  }

  render() {
    const { users } = this.state
    return <HomePage users={users} />
  }
}

export default UserListContainer
