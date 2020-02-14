import React, { Component } from 'react'
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
      database.ref(`user-details/${id}`).on('value', snapshot => {
        console.log(snapshot.val())
        if (snapshot.val()) {
          updatedUsers.push(snapshot.val())
          this.setState({ users: updatedUsers })
        }
      })
    })
  }

  render() {
    const { users } = this.state
    return <UserList users={users} />
  }
}

export default UserListContainer
