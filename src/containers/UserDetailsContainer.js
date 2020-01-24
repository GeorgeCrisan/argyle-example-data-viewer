import React, { Component } from 'react'
import UserDetails from '../components/UserDetails'
import firebase from '../helpers/firebase'

class UserDetailsContainer extends Component {
  state = {
    formData: null,
    file: null,
    firstName: '',
    lastName: ''
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
    } else {
      const uid = localStorage.getItem('uid')
    }
  }

  onInputChange = e => this.setState({ [e.target.name]: e.target.value })

  onAddImage = e => {
    const file = e.target.files[0]

    const fileReader = new FileReader()
    const formData = new FormData()

    formData.append('media', file)

    fileReader.onloadend = () => this.setState({ formData, file })

    fileReader.readAsDataURL(file)
  }

  onSubmit = e => {
    e.preventDefault()
    const { firstName, lastName, file } = this.state

    // Get a reference to the storage service, which is used to create references in your storage bucket
    var storage = firebase.storage()

    // Create a storage reference from our storage service
    var storageRef = storage.ref()
    const database = firebase.database()
    const uid = localStorage.getItem('uid')

    database.ref(`user-details/${uid}`).set({
      firstName,
      lastName
    })

    // Create a child reference
    var imagesRef = storageRef.child(uid)
    // imagesRef now points to 'images'

    imagesRef.put(file).then(snapshot => {
      console.log(11, snapshot)
    })
  }

  render() {
    const { firstName, lastName } = this.state

    return (
      <UserDetails
        onAddImage={this.onAddImage}
        onInputChange={this.onInputChange}
        firstName={firstName}
        lastName={lastName}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default UserDetailsContainer