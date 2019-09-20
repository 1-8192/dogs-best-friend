import React, { Component, Fragment } from 'react'
import { connect }  from 'react-redux'

//Components
import DogCard from '../components/DogCard'

//Containers
import Search from './Search'

//Actions
import { fetchDogs } from '../redux/dogActions'

class Doglist extends Component {

  state = {
    dogsAreSorted: false,
    displayDogs: []
  }

  componentDidMount() {
    this.props.fetchDogs("https://dogsbestfriend-backend.herokuapp.com/api/v1/dogs")
  }

  handleClick = () => {
    this.props.fetchDogs('https://dogsbestfriend-backend.herokuapp.com/api/v1/need')
    this.setState({
      dogsAreSorted: !this.state.dogsAreSorted
    })
  }

  handleSearch = (event) => {
    let newArray = this.props.dogs.filter(singleDog => {
      return singleDog.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.setState({
      displayDogs: newArray
    })
  }

  render () {
    if (this.state.displayDogs === []) {
      return (
        <div className="loader">Loading Pups</div>
      )
    }
    
    return (
      <Fragment>
        <div className="box has-text-centered">
          check in on a friend  <Search handleSearch={this.handleSearch} /><br/>
          {this.state.dogsAreSorted ?
            <p>These dogs have received the least amount of donations to date</p> :
            <Fragment>
              <button onClick={this.handleClick} className="button is-link is-rounded">Show me dogs who need my help!</button><br/>
            </Fragment>}
        </div>
        <div className="columns is-multiline is-3-desktop is-variable">
          {this.state.displayDogs.length > 0 ? 
           this.state.displayDogs.map(singleDog => <DogCard key={singleDog.id} dog={singleDog} />) :
           this.props.dogs.map(singleDog => <DogCard key={singleDog.id} dog={singleDog} />)}
        </div>
      </Fragment>
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
