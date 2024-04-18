import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
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

              <div className="menu-icon">
                <img src="../../src/assets/menuIcon.svg" alt="menu-icon" onClick={() => setIsActive(true)}/>
              </div>
          </div>
        </div>
      </nav>


      {/* Hamburger menu */}
      <div className={`mobile-menu-container ${isActive ? 'active' : ''}`}>
        <div className="closeIcon">
          <img src="../../src/assets/closeIcon.svg" alt="close-icon" onClick={() => setIsActive(false)}/>
        </div>

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Careers</a></li>
        </ul>

      </div>
      
    </>
  )
}

export default Navbar
