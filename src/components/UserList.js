import React, { useEffect, useState } from 'react'

import api from '../api/api'

const UserList = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      const results = await api.getUsers()
      setUsers(results)
    }
    fetchUsers()
  }, [])
  return (
    <div>
      {users.map(user => (
        <div>
          <a href={`/reports/${user.id}`}>{user.id}</a>
        </div>
      ))}
    </div>
  )
}

export default UserList
