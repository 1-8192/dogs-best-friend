import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
  state = {
    username: "",
    password: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    return (
      <div className="hero is-light">
        <div className="hero body">
          <div className="container">
            <form>
              <label htmlFor="username">User Name:</label>
              <input onChange={this.handleChange}  type="username" name="username" placeholder="puppylover1"/><br/>
              <label htmlFor="password">Password:</label>
              <input onChange={this.handleChange} type="password" name="password" placeholder="p@ssw0rd"/><br/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


export default Login
