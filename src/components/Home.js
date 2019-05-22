import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return(
      <div className="hero is-light is-fullheight-with-navbar bg-image-home darken-home has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title logo-font is-centered has-text-white-ter has-text-weight-semibold has-text-centered">Welcome to Dog's Best Friend</h1><br/>
            <h3 className="subtitle text-is-centered has-text-white-ter has-text-weight-semibold has-text-centered"> The app that helps you support NYC shelter dogs even if you can't adopt. </h3><br/>
            <Link className="button is-info" to="/dogs">Meet the dogs</Link>
        </div>
        </div>
      </div>
    )
  }
}

export default  Home
