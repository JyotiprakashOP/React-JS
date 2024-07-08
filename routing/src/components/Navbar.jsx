import React from 'react'
import {Link,NavLink} from "react-router-dom";

function Navbar() {
  return (
    <div >
        <h2>This is using navlink </h2>
        <div className="navbar">
            
            <Link to={"/"}>Home</Link>
            <NavLink to={"/about"}>About</NavLink>
            <Link to={"/contact"}>Contact</Link>
            <NavLink to={'/product'}>Product</NavLink>
            

        </div>
    </div>
  )
}

export default Navbar;