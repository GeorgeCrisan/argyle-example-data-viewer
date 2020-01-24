import React, { useEffect } from 'react'

import api from '../api/api'

const UserList = () => {
  useEffect(() => {
    api.getUsers()
  })
  return <div>UserList</div>
}

export default UserList
