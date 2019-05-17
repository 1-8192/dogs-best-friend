import React from 'react'
import { Link } from 'react-router-dom'

const DogCard = (props) => {

  function dogLink(id) {
    return `/dogs/${id}`
  }

  return (
    <div className="card column is-one-third">
      <div class="card-image">
        <figure class="image">
          <img src={props.dog.image_url} alt={props.dog.name}/>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4 is-centered">{props.dog.name}</p>
        <Link className="button is-light" to={{pathname: dogLink(props.dog.id),
          state: {
            dog: props.dog
          }}}><strong>Learn More about {props.dog.name}</strong></Link>
      </div>
    </div>
  )
}

export default DogCard
