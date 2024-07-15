import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
  return (
    <div >
        
        <Link to={"/about"}></Link>
        <Link to={"/product"}></Link>
        <Link to={"/contact"}></Link>
        


    </div>
  )
}

export default Home;