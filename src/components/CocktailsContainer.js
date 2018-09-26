import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'

class CocktailsContainer extends Component {

  constructor(){
    super();
    this.state = {
      isLoading: true,
      cocktails: [],
      proportions: [],
      ingredients: []
    }
  }

  componentDidMount(){
    fetch('https://react-boozer-backend.herokuapp.com/api/v1/cocktails')
      .then(resp => resp.json())
      .then(cocktail => {
        this.setState({
          isLoading: false,
          cocktails: cocktail
        })
      })

    fetch('https://react-boozer-backend.herokuapp.com/api/v1/proportions')
      .then(resp => resp.json())
      .then( proportion => {
        this.setState({
          proportions: proportion
        })
      })

    fetch('https://react-boozer-backend.herokuapp.com/api/v1/ingredients')
      .then(resp => resp.json())
      .then( ingredient => {
        this.setState({
          ingredients: ingredient
        })
      })
  }

  render(){
    return (
      this.state.isLoading ? null:
      <div>
        <div className="container">
          <CocktailsList cocktails={this.state.cocktails} proportions={this.state.proportions} ingredients={this.state.ingredients}/>
        </div>
      </div>
    )

  }
}

export default CocktailsContainer
