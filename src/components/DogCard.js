import React from 'react'
import { Link } from 'react-router-dom'

const DogCard = (props) => {

  function dogLink(id) {
    return `/dogs/${id}`
  }

  return (
    <div className="card is-shadowless column is-one-third zoom has-background-white-ter">
      <div className="card-image">
        <figure className="image is-square is-size-1-mobile">
          <img src={props.dog.image_url} alt={props.dog.name}/>
        </figure>
      </div>
      <div className="media-content has-text-centered">
        <p className="title is-4">{props.dog.name}</p>
        <Link className="button is-info" to={{pathname: dogLink(props.dog.id),
          state: {
            dogId: props.dog.id
          }}}><strong>Learn More about {props.dog.name}</strong></Link>
      </div>
    </div>
  )
}

export default DogCard
