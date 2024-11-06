import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    const {userId}= useParams();
  return (
    <div>
        <h1>Profile Page</h1>
        <p>User Id: {userId}</p>
    </div>
  )
}

export default Profile;