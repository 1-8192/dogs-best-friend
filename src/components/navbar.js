import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

//Actions
import { logOut } from '../redux/userActions'

const Navbar = (props) => {
  return (
    <nav className="navbar is-fixed-top is-mobile is-light" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="/" className="logo-font">Dog's Best Friend</Link>
    </div>
    <div className="navbar-menu is-active">
        <div className="navbar-start">
          <Link className="navbar-item" to="/about">About</Link>
          <Link className="navbar-item" to="/shelters">Shelters</Link>
          <Link className="navbar-item" to="/dogs">Dogs</Link>
        </div>
        <div className="navbar-end">
          {props.user ? (
            <div className="buttons">
              <Link className="button is-primary" to="/profile"><strong>My Profile</strong></Link>
              <Link className="button is-light" to="/logout" onClick={props.logout}><strong>Logout</strong></Link>
            </div>
          ) : (
            <div className="buttons">
              <Link className="button is-primary" to="/register"><strong>Register</strong></Link>
              <Link className="button is-light" to="/login">Log in</Link>
            </div>
          )}
        </div>
    </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user.currentUser.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
