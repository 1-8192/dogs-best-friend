import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const DogDisplay = (props) => {
  return (
    <div column-is-centered>
      <figure className="image is-square">
        <img alt={props.location.state.dog.name} src={props.location.state.dog.image_url} />
      </figure>
      <ul className="notification">
        <li>Name: {props.location.state.dog.name}</li>
        <li>Chip id: {props.location.state.dog.chip_id}</li>
        <li>Sex: {props.location.state.dog.sex}</li>
        <li>Breed: {props.location.state.dog.breed}</li>
        <li>At-risk: {props.location.state.dog.at_risk ? "yes" : "no"}</li>
        <li>Vaccines: {props.location.state.dog.is_vaccinated ? "up to date" : "needs vaccines"}</li>
        <li>Current Animal Shelter:
          <Link to="/shelters"><strong>{props.location.state.dog.shelter.name}</strong></Link>
        </li>
      </ul>
      { props.user ?
      <Link className="button is-primary" to={{pathname: '/donation',
        state: {
          dog: props.location.state.dog
        }}}><strong>Donate to help {props.location.state.dog.name}</strong></Link> :
        null}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user.currentUser.user
  }
}

export default connect(mapStateToProps)(DogDisplay)
