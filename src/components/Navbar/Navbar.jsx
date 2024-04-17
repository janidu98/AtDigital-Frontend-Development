import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="nav-container">
            <div className="logo">
                <img src="../../src/assets/logo.svg" alt="logo" />
            </div>

            <ul>
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Careers</a></li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
