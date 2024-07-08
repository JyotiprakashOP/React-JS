import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <h1>This is home page</h1>
        <h2>This is Using link tag</h2>
        <Link to={"/about"}><h3>Go to about page</h3></Link>
        <Link to={"/product"}><h3>Go to product page</h3></Link>
        <Link to={"/contact"}><h3>Go to contact page</h3></Link>
        


    </div>
  )
}

export default Home;