import React, { Component } from 'react'
import { connect } from 'react-redux'

class Register extends Component {
  state = {
    username: "",
    email: "",
    payment_info: "",
    password: "",
    password_confirmation: ""
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
              <label htmlFor="email">Email:</label>
              <input onChange={this.handleChange} type="email" name="email" placeholder="doglover@dogs.com"/><br/>
              <label htmlFor="username">User Name:</label>
              <input onChange={this.handleChange}  type="username" name="username" placeholder="puppylover1"/><br/>
              <label htmlFor="payment_info">Payment Info:</label>
              <input onChange={this.handleChange} type="payment_info" name="payment_info" placeholder="000-000-000-000"/><br/>
              <label htmlFor="password">Password:</label>
              <input onChange={this.handleChange} type="password" name="password" placeholder="p@ssw0rd"/><br/>
              <label htmlFor="password_confirmation">Confirm Password:</label>
              <input onChange={this.handleChange} type="password_confirmation" name="password_confirmation" placeholder="p@ssw0rd"/><br/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


export default Register
