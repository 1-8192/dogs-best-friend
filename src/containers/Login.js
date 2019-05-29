import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerOrLoginUser } from '../redux/userActions'

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

  handleSubmit = (event) => {
    event.preventDefault()

    let url = "https://dogsbestfriend-backend.herokuapp.com/api/v1/login"
    let logUser = this.state

    this.props.registerOrLoginUser(url, logUser)
    this.props.history.push('/profile')
  }

  render () {
    return (
      <div className="hero is-light is-vcentered">
        <div className="hero body">
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="username">User Name:</label>
              <input className="input is-info" onChange={this.handleChange}  type="username" name="username" placeholder="puppylover1"/><br/>
              <label htmlFor="password">Password:</label>
              <input className="input is-info" onChange={this.handleChange} type="password" name="password" placeholder="p@ssw0rd"/><br/>
              <input className="button is-success is-outlined" type="submit" value="Log In" />
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

export default connect(null, mapDispatchToProps)(Login)
