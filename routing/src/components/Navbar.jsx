import React from 'react'
import {Link,NavLink} from "react-router-dom";
import "./Home.css"

function Navbar() {
  return (
    <div >
        
        <div className="navbar">
            
            <Link className='navContent' to={"/"}>Home</Link>
            <NavLink className='navContent' to={"/about"}>About</NavLink>
            <Link className='navContent' to={"/contact"}>Contact</Link>
            <NavLink className='navContent' to={'/product'}>Product</NavLink>
            

        </div>
    </div>
  )
}

export default Navbar;