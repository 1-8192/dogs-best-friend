import React, { Component } from 'react'
import { connect } from 'react-redux'

//Actions
import { editUser } from '../redux/userActions'

class EditProfile extends Component {
  state = {
    id: this.props.user.id,
    username: this.props.user.username,
    email: this.props.user.email,
    payment_info: this.props.user.payment_info,
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let url = `http://localhost:3005/api/v1/users/${this.state.id}`
    let userEdit = this.state

    this.props.editUser(url, userEdit)
    this.props.history.push("/profile")
  }

  render () {
    return (
      <div>
        <h2>Edit Your Profile information:</h2>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input onChange={this.handleChange} type="email" name="email" value={this.state.email}/><br/>
        <label htmlFor="username">User Name:</label>
        <input onChange={this.handleChange}  type="username" name="username" value={this.state.username}/><br/>
        <label htmlFor="payment_info">Credit Card:</label>
        <input onChange={this.handleChange} type="payment_info" name="payment_info" value={this.state.payment_info}/><br/>
        <input className="button is-primary" type="submit" value="Update User Info" />
        </form>
      </div>
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
    editUser: (url, userEdit) => dispatch(editUser(url, userEdit))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
