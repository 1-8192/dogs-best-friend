import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

//Actions
import { logOut } from '../redux/userActions'

class Navbar extends Component {
  state = {
    burgerActive: "navbar-burger",
    menuActive: "navbar-menu"
  }

  toggleActive = () => {
    if (this.state.burgerActive === "navbar-burger") {
      this.setState({
        burgerActive: "navbar-burger is-active",
        menuActive: "navbar-menu is-active"
      })
    } else {
      this.setState({
        burgerActive: "navbar-burger",
        menuActive: "navbar-menu"
      })
    }
  }

  render() {
    return (
    <nav className="navbar is-fixed-top is-mobile is-light" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="/" className="logo-font">Dog's Best Friend</Link>
        <a onClick={this.toggleActive} role="button" className={this.state.burgerActive} aria-label="menu" aria-expanded="false" >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
    </div>
    <div onClick={this.toggleActive} className={this.state.menuActive}>
        <div className="navbar-start">
          <Link className="navbar-item" to="/about">About</Link>
          <Link className="navbar-item" to="/shelters">Shelters</Link>
          <Link className="navbar-item" to="/dogs">Dogs</Link>
        </div>
        <div className="navbar-end">
          {this.props.user ? (
            <div className="buttons">
              <Link className="button is-info is-outlined" to="/profile"><strong>My Profile</strong></Link>
              <input className="button is-success is-outlined" type="submit" onClick={this.props.logOut} value="Logout" />
            </div>
          ) : (
            <div className="buttons">
              <Link className="button is-info is-outlined" to="/register"><strong>Register</strong></Link>
              <Link className="button is-success is-outlined" to="/login">Log in</Link>
            </div>
          )}
        </div>
    </div>
    </nav>
  )
}
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
