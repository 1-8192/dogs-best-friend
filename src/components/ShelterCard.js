import React from 'react'

const ShelterCard = (props) => {
  return (
    <div className="card column is-one-third">
      <h2>{props.shelter.name}</h2>
      <h3> Address: {props.shelter.location} </h3>
      <h3> Phone: {props.shelter.contact} </h3>
    </div>
  )
}

export default ShelterCard
