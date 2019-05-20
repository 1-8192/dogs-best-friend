import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const DogDisplay = (props) => {

  const add = (a,b) => {
    return a+b
  }

  //finds sum of payments related to dog
  let paymentArray = props.location.state.dog.payments.map(payment => parseFloat(payment.amount))
  const donationTotal = paymentArray.reduce(add, 0)

  return (
    <section className="section">
      <div className="container">
          <figure className="image is-5by4">
            <img alt={props.location.state.dog.name} src={props.location.state.dog.image_url} />
          </figure>
        <ul className="notification">
          <li>Name: {props.location.state.dog.name}</li>
          <li>Chip: {props.location.state.dog.chip_id}</li>
          <li>Sex: {props.location.state.dog.sex}</li>
          <li>Breed: {props.location.state.dog.breed}</li>
          <li>At-risk: {props.location.state.dog.at_risk ? "yes" : "no"}</li>
          <li>Vaccines: {props.location.state.dog.is_vaccinated ? "up to date" : "needs vaccines"}</li>
          <li>Current Animal Shelter:
            <Link to="/shelters"><strong>{props.location.state.dog.shelter.name}</strong></Link>
          </li>
        </ul>
        <div>
          <h3> Donors who have helped {props.location.state.dog.name}: </h3>
          <ul>
            {props.location.state.dog.users.map(user => <li>{user.username}</li>)}
          </ul>
        </div>
        <h4>Total raised for {props.location.state.dog.name} so far: ${donationTotal}</h4>
        { props.user ?
        <Link className="button is-primary" to={{pathname: '/donation',
          state: {
            dog: props.location.state.dog
          }}}><strong>Donate to help {props.location.state.dog.name}</strong></Link> :
          null}
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user.currentUser.user
  }
}

export default connect(mapStateToProps)(DogDisplay)
