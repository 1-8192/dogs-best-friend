import React, { Component } from 'react'
import { connect } from 'react-redux'

//components
import ShelterCard from '../components/ShelterCard'

//Actions
import { fetchShelters} from '../redux/shelterActions'

class Shelterlist extends Component {

componentDidMount(){
  this.props.fetchShelters('http://localhost:3005/api/v1/shelters')
}

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1>Partner Shelters:</h1>
          <br/>
          <div className="is-multiline is-3-mobile is-3-desktop has-text-centered">
            {this.props.shelters.map(singleShelter => <ShelterCard key={singleShelter.id} shelter={singleShelter} />)}
          </div>
        </div>
      </section>
      )
}
}

const mapStateToProps = (state) => {
  return {
    shelters: state.shelters.shelterArray
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShelters: (url) => dispatch(fetchShelters(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shelterlist)
