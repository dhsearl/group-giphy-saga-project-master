import React, { Component } from 'react';
import Search from '../Search/Search'
import Favorites from '../Favorites/Favorites'
import {HashRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {

  render() {
    return (
        <Router>
      <div>
        <h1>Giphy Search!</h1>
        <Route path="/" exact component={Search}/>
        <Route path="/favorites" component={Favorites}/>

      </div>
      </Router>
    );
  }
  
}

export default App;
