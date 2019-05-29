import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

//Actions
import { editUser } from '../redux/userActions'

class EditProfile extends Component {
  state = {
    id: "",
    username: "",
    email: "",
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

  componentDidMount() {
    this.setState({
      id: this.props.user.id,
      username: this.props.user.username,
      email: this.props.user.email
    })
  }

  render () {
    return (
      <div>
        {this.props.user ?
          <div className="donation-form">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="email">Email:</label>
              <input className="input is-info" onChange={this.handleChange} type="email" name="email" value={this.state.email}/><br/>
              <label htmlFor="username">User Name:</label>
              <input className="input is-info" onChange={this.handleChange}  type="username" name="username" value={this.state.username}/><br/>
              <div className="has-text-centered">
                <input className="button is-success is-outlined" type="submit" value="Update User Info" />
                <Link className="button is-warning is-outlined" to="/profile">Discard Changes</Link>
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
