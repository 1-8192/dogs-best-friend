import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, withRouter, Switch } from 'react-router-dom'

//components
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

//containers
import Doglist from './containers/Doglist'
import Register from './containers/Register'
import Login from './containers/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <main>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/dogs" component={Doglist} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
