import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CocktailsContainer from './components/CocktailsContainer'
import Form from './components/Form.js'



class App extends Component {
  render() {
    return (
      <div>
        <CocktailsContainer />
        <Form />
      </div>
    );
  }
}

export default App;
