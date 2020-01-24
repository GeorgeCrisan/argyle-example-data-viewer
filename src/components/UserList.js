import React from 'react'

const UserList = ({ users }) => {
  return (
    <div>
      {users.map(user => (
        <div>
          {user.firstName}
          {user.lastName}
          <a href={`/reports/${user.id}`}>{user.id}</a>
        </div>
      ))}
    </div>
  )
}

export default UserList
