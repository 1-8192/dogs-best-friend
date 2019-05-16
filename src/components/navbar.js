import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar is-fixed-top is-mobile" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <span className="logo-font">Dog's Best Friend</span>
    </div>
    <div className="navbar-menu is-active">
        <div className="navbar-start">
          <Link className="navbar-item" to="/about">About</Link>
          <Link className="navbar-item" to="/">Shelters</Link>
          <Link className="navbar-item" to="/dogs">Dogs</Link>
        </div>
        <div className="navbar-end">
          <Link className="navbar-item" to="/profile">My Profile</Link>
        </div>
    </div>
    </nav>
  )
}

export default Navbar
