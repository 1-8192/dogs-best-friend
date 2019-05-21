import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

//Actions
import { logOut, deleteUser } from '../redux/userActions'
import { fetchDogs } from '../redux/dogActions'

//Components
import DogCard from '../components/DogCard'

const totalDonated = (props) => {
  let total = 0
  props.user.payments.forEach(payment => total += payment.amount)
  return total
}

class Profile extends Component {

  render() {
  return (
    <div>
      { this.props.user ?
        <section>
          <div className="container">
            <h1> Welcome, {this.props.user.username}! </h1>
            <div className="is-multiline is-3-mobile is-3-desktop">
              <h3> Grateful pups:</h3>
              {this.props.user.dogs.map(dog => <DogCard key={dog.id} dog={dog} />)}
            </div>
            <h3>Total donated: ${totalDonated(this.props)}</h3>
            <Link className="button is-info is-outlined" to="/edit_profile">Edit Profile</Link>
            <input onClick={this.props.logOut} className="button is-warning is-outlined" type="submit" value="Log Out" />
            <input onClick={()=> {this.props.deleteUser(`http://localhost:3005/api/v1/users/${this.props.user.id}`)}} className="button is-danger is-outlined" type="submit" value="Unregister" />
          </div>
        </section>
        : <h1> Please Log In </h1>}
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
    logOut: () => dispatch(logOut()),
    deleteUser: (url) => dispatch(deleteUser(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
