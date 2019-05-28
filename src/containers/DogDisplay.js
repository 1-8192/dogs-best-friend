import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

//Actions
import { fetchShowDog } from '../redux/dogActions'

class DogDisplay extends Component {

  componentDidMount(){
    this.props.fetchShowDog(`http://localhost:3005/api/v1/dogs/${this.props.location.state.dogId}`)
  }

  render() {
    return (
      <section className="section">
        <div className="container">
            <figure className="image is-5by4-desktop is-size-1-mobile">
              <img alt={this.props.dog.name} src={this.props.dog.image_url} />
            </figure>
          <ul className="notification">
            <li>Name: {this.props.dog.name}</li>
            <li>Chip: {this.props.dog.chip_id}</li>
            <li>Sex: {this.props.dog.sex}</li>
            <li>Age: {this.props.dog.age}</li>
            <li>Breed: {this.props.dog.breed}</li>
            <li>At-risk: {this.props.dog.at_risk ? "yes" : "no"}</li>
            <li>Vaccines: {this.props.dog.is_vaccinated ? "up to date" : "needs vaccines"}</li>
            <li>Current Animal Shelter:
              <Link to="/shelters"><strong>{this.props.dog.shelter ? this.props.dog.shelter.name : null}</strong></Link>
            </li>
          </ul>
          <p>{this.props.dog.description}</p><br/>
          <div className="has-text-centered">
            <h3> Donors who have helped {this.props.dog.name}: </h3>
            <ul>
              {this.props.dog.users ? this.props.dog.users.map(user => <li>{user.username}</li>) : null}
            </ul>
          </div>
          <div className="has-text-centered">
            <h4>Total raised for {this.props.dog.name} so far: ${this.props.totalPayments}</h4>
            { this.props.user ?
            <Link className="button is-success" to={{pathname: '/donation',
              state: {
                dog: this.props.dog
              }}}><strong>Donate to help {this.props.dog.name}</strong></Link> :
              <h3><strong>Please log in or register to help {this.props.dog.name}</strong></h3>}
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.currentUser.user,
    dog: state.dogs.show_dog.dog,
    totalPayments: state.dogs.show_dog.total_payments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShowDog: (url) => dispatch(fetchShowDog(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogDisplay)
