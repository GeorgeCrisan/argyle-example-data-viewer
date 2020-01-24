import React from 'react'
import { Charts } from './Charts'

const Report = props => {
  const userId = props.match.params.userId
  return (
    <div>
      <div>Reports and charts</div>
      <Charts userId={userId} />
    </div>
  )
}

export default Report
