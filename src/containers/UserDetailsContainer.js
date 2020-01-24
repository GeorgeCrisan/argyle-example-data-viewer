import React, { Component } from 'react'
import UserDetails from '../components/UserDetails'

class UserDetailsContainer extends Component {
  state = {
    formData: null
  }

  onAddImage = e => {
    const file = e.target.files[0]
    console.log(file)

    const fileReader = new FileReader()
    const formData = new FormData()

    formData.append('media', file)

    fileReader.onloadend = () => this.setState({ formData })

    fileReader.readAsDataURL(file)
  }

  render() {
    return <UserDetails onAddImage={this.onAddImage} />
  }
}

export default UserDetailsContainer
