import React, { useEffect, useState, Component } from 'react'
import api from '../api/api'
import UserList from '../components/UserList'
import firebase from '../helpers/firebase'

class UserListContainer extends Component {
  state = {
    users: []
  }

  async componentDidMount() {
    const database = firebase.database()
    const results = await api.getUsers()

    let updatedUsers = []

    results.forEach(({ id }) => {
      const currentUser = {}

      database.ref(`user-details/${id}`).on('child_added', snapshot => {
        currentUser[snapshot.key] = snapshot.node_.value_
        currentUser.id = id

        if (currentUser.firstName && currentUser.lastName) {
          updatedUsers.push(currentUser)
        }
        this.setState({ users: updatedUsers })
      })
    })
  }
  render() {
    const { users } = this.state
    return <UserList users={users} />
  }
}

export default UserListContainer
