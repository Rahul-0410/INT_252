import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    const userId=123;
  return (
    <div>
        <h1>Home Page</h1>
        <Link to={`/profile/${userId}`}>Go to Profile</Link>
    </div>
  )
}

export default Home;