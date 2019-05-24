import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

//Actions
import { editUser } from '../redux/userActions'

class EditProfile extends Component {
  state = {
    id: "",
    username: "",
    email: "",
    payment_info: "",
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
        {this.props.user ?
          <div className="donation-form">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="email">Email:</label>
              <input className="input is-info" onChange={this.handleChange} type="email" name="email" value={this.state.email} placeholder={this.props.user.email}/><br/>
              <label htmlFor="username">User Name:</label>
              <input className="input is-info" onChange={this.handleChange}  type="username" name="username" value={this.state.username} placeholder={this.props.user.username}/><br/>
              <label htmlFor="payment_info">Credit Card:</label>
              <input className="input is-info" onChange={this.handleChange} type="payment_info" name="payment_info" value={this.state.payment_info} placeholder={this.props.user.payment_info}/><br/>
              <div className="has-text-centered">
                <input className="button is-success" type="submit" value="Update User Info" />
              </div>
            </form>
        </div> : <h1>Oops, you don't have access to this page :-( </h1>}
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
