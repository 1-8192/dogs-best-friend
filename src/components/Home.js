import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return(
      <div className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title logo-font">Welcome to Dog's Best Friend</h1>
            <h3 className="subtitle"> The app that helps you support NYC shelter dogs even if you can't adopt. </h3>
          </div>
        </div>
      </div>
    )
  }
}

export default  Home
