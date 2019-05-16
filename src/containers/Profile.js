import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

//Actions
import { logOut, deleteUser } from '../redux/userActions'

const Profile = (props) => {
  return (
    <div>
      { props.user ?
        <Fragment>
        <h1> Welcome, {props.user.username} </h1>
        <Link className="button is-light" to="/edit_profile">Edit Profile</Link>
        <input onClick={props.logOut} className="button is-light" type="submit" value="Log Out" />
        <input onClick={()=> {props.deleteUser(`http://localhost:3005/api/v1/users/${props.user.id}`)}} className="button is-light" type="submit" value="Unregister" />
        </Fragment>
        : <h1> Please Log In </h1>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user.currentUser.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
    deleteUser: (url) => dispatch(deleteUser(url))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
