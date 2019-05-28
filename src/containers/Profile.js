import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

//Actions
import { logOut, deleteUser } from '../redux/userActions'
import { fetchDogs } from '../redux/dogActions'

//Components
import DogCard from '../components/DogCard'

class Profile extends Component {

  render() {
  return (
    <div>
      { this.props.user ?
        <section>
          <div className="container has-text-centered text-is-strong">
            <h1> Welcome, {this.props.user.username}! </h1><br/>
            <h3> GRATEFUL PUPS YOU'VE HELPED:</h3><br/>
            <div className="columns is-multiline is-centered is-3-desktop">
              {this.props.user.dogs.map(dog => <DogCard key={dog.id} dog={dog} />)}
            </div><br/>
            <h3>Total donated to date: ${this.props.totalPayments}</h3>
            <Link className="button is-info is-outlined" to="/edit_profile">Edit Profile</Link>
            <input onClick={this.props.logOut} className="button is-warning is-outlined" type="submit" value="Log Out" />
            <input onClick={()=> {this.props.deleteUser(`http://localhost:3005/api/v1/users/${this.props.user.id}`)}} className="button is-danger is-outlined" type="submit" value="Unregister" />
          </div>
        </section>
        : <Link to="/login">Please log in</Link>}
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return {
    user: state.user.currentUser.user,
    totalPayments: state.user.currentUser.total_payments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
    deleteUser: (url) => dispatch(deleteUser(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
