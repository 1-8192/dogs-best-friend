import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

//Actions
import { logOut, deleteUser } from '../redux/userActions'

//Components
import DogCard from '../components/DogCard'

const totalDonated = (props) => {
  let total = 0
  props.user.payments.forEach(payment => total += payment.amount)
  return total
}

const Profile = (props) => {

  return (
    <div>
      { props.user ?
        <Fragment>
        <h1> Welcome, {props.user.username} </h1>
        <div className="is-multiline is-3-mobile is-3-desktop">
          <h3> Dogs you've helped</h3>
          {props.user.dogs.map(dog => <DogCard key={dog.id} dog={dog} />)}
        </div>
        <h3>Total donated: ${totalDonated(props)}</h3>
        <Link className="button is-light" to="/edit_profile">Edit Profile</Link>
        <input onClick={props.logOut} className="button is-light" type="submit" value="Log Out" />
        <input onClick={()=> {props.deleteUser(`http://localhost:3005/api/v1/users/${props.user.id}`)}} className="button is-danger" type="submit" value="Unregister" />
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
