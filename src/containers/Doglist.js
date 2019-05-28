import React, { Component, Fragment } from 'react'
import { connect }  from 'react-redux'
import DogCard from '../components/DogCard'

//Actions
import { fetchDogs } from '../redux/dogActions'

class Doglist extends Component {

  state = {
    dogsAreSorted: false
  }

  componentDidMount() {
    this.props.fetchDogs("http://localhost:3005/api/v1/dogs")
  }

  handleClick = () => {
    this.props.fetchDogs('http://localhost:3005/api/v1/need')
    this.setState({
      dogsAreSorted: !this.state.dogsAreSorted
    })
  }

  render () {
    return (
      <Fragment>
        <div className="box has-text-centered">
          {this.state.dogsAreSorted ?
            <p>These dogs have received the least amount of donations to date:</p> :
            <Fragment>
              <button onClick={this.handleClick} className="button is-link is-rounded">Show me dogs who need my help!</button><br/>
            </Fragment>}
        </div>
        <div className="columns is-multiline is-3-desktop">
          {this.props.dogs.map(singleDog => <DogCard key={singleDog.id} dog={singleDog} />)}
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
