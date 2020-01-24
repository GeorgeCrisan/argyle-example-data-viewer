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

      database.ref(`user-details/${id}`).on('child_added', snapshot => {
        // const spaceRef = storage.ref().child(id)
        storageRef
          .child(id)
          .getDownloadURL()
          .then(function(url) {
            // `url` is the download URL for 'images/stars.jpg'
            console.log({ url })
            // This can be downloaded directly:
            var xhr = new XMLHttpRequest()
            xhr.responseType = 'blob'
            xhr.onload = function(event) {
              var blob = xhr.response
            }
            xhr.open('GET', url)
            xhr.send()

            // Or inserted into an <img> element:
            var img = document.getElementById('myimg')
            img.src = url
          })
          .catch(function(error) {
            // Handle any errors
          })

        // console.log(spaceRef)
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
