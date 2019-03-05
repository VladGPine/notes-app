import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

import AddNotePage from './components/AddNotePage'
import HomePage from './components/HomePage';

class App extends Component {
  

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={HomePage} />
          <Route path='/add-note' component={AddNotePage} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
