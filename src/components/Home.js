import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return(
      <div className="hero is-light is-fullheight-with-navbar bg-image-home">
        <div className="hero-body">
          <div className="container">
            <h1 className="title logo-font is-centered has-text-grey-lighter has-text-weight-semibold has-text-centered">Welcome to Dog's Best Friend</h1><br/>
            <h3 className="subtitle text-is-centered has-text-grey-lighter has-text-weight-semibold has-text-centered"> The app that helps you support NYC shelter dogs even if you can't adopt. </h3>
          </div>
        </div>
      </div>
    )
  }
}

export default  Home
