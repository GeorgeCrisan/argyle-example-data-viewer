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
    const storage = firebase.storage()
    var storageRef = storage.ref()

    const results = await api.getUsers()

    let updatedUsers = []

    results.forEach(({ id }) => {
      const currentUser = {}
      let count = 0

      database.ref(`user-details/${id}`).on('child_added', async snapshot => {
        const url = await storageRef.child(id).getDownloadURL()
        currentUser.imgUrl = url

        currentUser[snapshot.key] = snapshot.node_.value_
        currentUser.id = id
        count = count + 1

        if (currentUser.firstName && currentUser.lastName && count > 4) {
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
