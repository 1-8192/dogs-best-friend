import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

//Actions
import { logOut, deleteUser } from '../redux/userActions'

//Components
import DogCard from '../components/DogCard'
import PaymentCard from '../components/PaymentCard'

class Profile extends Component {
  state = {
    dogsHidden: true,
    paymentsHidden: true
  }

  revealDogs =() => {
    this.setState({
      dogsHidden: !this.state.dogsHidden
    })
  }

  revealPayments =() => {
    this.setState({
      paymentsHidden: !this.state.paymentsHidden
    })
  }

  showHelpedDogs = () => {
    if (this.state.dogsHidden === true ) {
      return null
    } else {
      if (this.props.user.dogs.length > 0) {
        return (
          <Fragment>
            <h3> GRATEFUL PUPS YOU'VE HELPED</h3><br/>
            <div className="columns is-multiline is-centered is-3-desktop">
              {this.props.user.dogs.map(dog => <DogCard key={dog.id} dog={dog} />)}
            </div><br/>
          </Fragment>
        )
      } else {
        return <h3>Please donate to the pups!</h3>
      }
    }
  }

  showPayments = () => {
    if (this.state.paymentsHidden === true) {
      return null
    } else {
      if (this.props.user.payments.length > 0){
      return (
        <Fragment>
          <h3> PAYMENT HISTORY</h3><br/>
          <div className="columns is-multiline is-centered is-3-desktop">
            {this.props.user.payments.map(singlePayment => <PaymentCard payment={singlePayment} />)}
          </div><br/>
        </Fragment>
      )
    } else {
      return <h3>No payment activity to date</h3>
      }
    }
  }

  render() {
  return (
    <div>
      { this.props.user ?
        <section>
          <aside className="menu is-fixed-top is-mobile">
          <p className="menu-label">
          Activity
          </p>
          <ul className="menu-list">
          <li><a onClick={this.revealDogs}>Dogs you have helped</a></li>
          <li><a onClick={this.revealPayments}>Payments</a></li>
          </ul>
        </aside>
          <div className="container has-text-centered text-is-strong">
            <h1> Welcome, {this.props.user.username}! </h1><br/>
            {this.showHelpedDogs()}
            {this.showPayments()}
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
