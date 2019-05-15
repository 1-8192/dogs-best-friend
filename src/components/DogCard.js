import React from 'react'

const DogCard = (props) => {

  return (
    <div className="card column is-one-third">
      <div class="card-image">
        <figure class="image">
          <img src={props.dog.image_url} alt={props.dog.name}/>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4 is-centered">{props.dog.name}</p>
      </div>
    </div>
  )
}

export default DogCard
