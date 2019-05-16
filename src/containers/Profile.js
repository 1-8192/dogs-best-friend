import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

//Actions
import { logOut, deleteUser } from '../redux/userActions'

const Profile = (props) => {
  return (
    <div>
      { props.user ?
        <Fragment>
        <h1> Welcome, {props.user.username} </h1>
        <input onClick={props.logOut} className="button is-primary" type="submit" value="Log Out" />
        <input onClick={()=> {props.deleteUser(`http://localhost:3005/api/v1/users/${props.user.id}`)}} className="button is-primary" type="submit" value="Unregister" />
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
