import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { StripeProvider, Elements } from 'react-stripe-elements'

//components
import Navbar from './containers/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'

//containers
import DogDisplay from './containers/DogDisplay'
import Doglist from './containers/Doglist'
import Register from './containers/Register'
import Login from './containers/Login'
import Profile from './containers/Profile'
import EditProfile from './containers/EditProfile'
import Shelterlist from './containers/Shelterlist'
import Donation from './containers/Donation'

//Actions
import { persistAuthOnRefresh } from './redux/userActions'

class App extends Component {

  componentDidMount(){
    this.props.persistAuthOnRefresh("http://localhost:3005/api/v1/profile")
  }

  render() {
    return (
      <StripeProvider apiKey="pk_test_vUyt1s1mB1YbVWsHk8Fsgafd00Q0CPWtg0">
        <Elements>
        <div className="App">
          <header className="App-header has-navbar-fixed-top">
            <Navbar/>
          </header>
            <main>
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/dogs/:id" component={DogDisplay} />
                <Route path="/dogs" component={Doglist} />
                <Route path="/donation" component={Donation} />
                <Route path="/edit_profile" component={EditProfile} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={Profile} />
                <Route path="/register" component={Register} />
                <Route path="/shelters" component={Shelterlist} />
                <Route path="/" component={Home} />
              </Switch>
            </main>
          <Footer />
        </div>
      </Elements>
    </StripeProvider>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    persistAuthOnRefresh: (url) => dispatch(persistAuthOnRefresh(url))
  }
}

export default connect(null, mapDispatchToProps)(App)
