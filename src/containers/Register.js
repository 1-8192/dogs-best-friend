import React, { Component } from 'react'
import { connect } from 'react-redux'

//Actions
import { registerOrLoginUser } from '../redux/userActions'

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password_confirmation: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let url = "https://dogsbestfriend-backend.herokuapp.com/api/v1/register"
    let newUser = this.state

    this.props.registerOrLoginUser(url, newUser)
    this.setState({
      username: "",
      email: "",
      password: "",
      password_confirmation: ""
    })
    this.props.history.push("/profile")
  }

  render () {
    return (
      <div className="hero is-light">
        <div className="hero body">
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="email">Email:</label>
              <input className="input is-info" onChange={this.handleChange} type="email" name="email" placeholder="doglover@dogs.com" value={this.state.email} /><br/>
              <label htmlFor="username">User Name:</label>
              <input className="input is-info" onChange={this.handleChange}  type="username" name="username" placeholder="puppylover1" value={this.state.username} /><br/>
              <label htmlFor="password">Password:</label>
              <input className="input is-info" onChange={this.handleChange} type="password" name="password" placeholder="p@ssw0rd" value={this.state.password} /><br/>
              <label htmlFor="password_confirmation">Confirm Password:</label>
              <input className="input is-info" onChange={this.handleChange} type="password" name="password_confirmation" placeholder="p@ssw0rd" value={this.state.password_confirmation} /><br/>
              <input className="button is-success is-outlined" type="submit" value="Register" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerOrLoginUser: (url, inputUser) => dispatch(registerOrLoginUser(url, inputUser))
  }
}

export default connect(null, mapDispatchToProps)(Register)
