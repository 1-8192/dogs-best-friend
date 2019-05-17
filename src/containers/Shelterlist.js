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
      <div is-multiline is-3-mobile is-3-desktop>
        {this.props.shelters.map(singleShelter => <ShelterCard key={singleShelter.id} shelter={singleShelter} />)}
      </div>
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
