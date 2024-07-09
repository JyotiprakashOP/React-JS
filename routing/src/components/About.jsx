import React from 'react';
import { Link,Outlet } from 'react-router-dom';

function About() {
  return (
    <div>
        <h1>This is about page</h1>
        <div className="parent" style={{display:'flex',gap:'50px'}}>
          <Link to="childservice">Visit services</Link>
          <Link to="childwebsite">Website services</Link>
          <Link to="childsubscription">Subscription Visit</Link>
          <Outlet/>
        </div>
    </div>
  )
}

export default About;