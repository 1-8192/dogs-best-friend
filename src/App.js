import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, withRouter, Switch } from 'react-router-dom'

//components
import Navbar from './components/Navbar'
import Home from './components/Home'
import Doglist from './containers/Doglist'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <main>
        <Switch>
          <Route path="/dogs" component={Doglist} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
