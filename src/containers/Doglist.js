import React from 'react'
import { connect }  from 'react-redux'
import { fetchDogs } from '../redux/dogActions'
import DogCard from '../components/DogCard'

class Doglist extends React.Component {

  state = {
    displayDogs: []
  }

  componentDidMount() {
    this.props.fetchDogs('http://localhost:3005/api/v1/dogs')
  }

  render () {
    return (
      <div className="is-multiline is-3-mobile is-3-desktop">
        {this.props.dogs.map(singleDog => <DogCard key={singleDog.id} dog={singleDog} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dogs: state.dogs.dogs_array
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    fetchDogs: (url) => dispatch(fetchDogs(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Doglist)
