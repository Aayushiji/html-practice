import React from 'react'
import Sidebar from './sidebar';
import Nav from './navbar';

const Home = () => {
  return (
    <div>
      <Nav/>
        <Sidebar />
        {/* <h1>Home</h1> */}
    </div>
  )
}

export default Home;