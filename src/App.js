import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, withRouter, Switch } from 'react-router-dom'

//components
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import DogDisplay from './components/DogDisplay'

//containers
import Doglist from './containers/Doglist'
import Register from './containers/Register'
import Login from './containers/Login'
import Profile from './containers/Profile'
import EditProfile from './containers/EditProfile'
import Shelterlist from './containers/Shelterlist'
import Donation from './containers/Donation'

function App() {
  return (
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
    </div>
  );
}

export default App;
