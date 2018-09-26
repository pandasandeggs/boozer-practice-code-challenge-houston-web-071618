import React, { Component } from 'react'
import Cocktail from './Cocktail'

class CocktailsList extends Component {

  getCocktails = () => {
    return this.props.cocktails.map( cocktail => {
      return < Cocktail key={cocktail.id} cocktail={cocktail} proportions={this.getProportions(cocktail.id)}/>
    })
  }

  getProportions = (cocktailId) => {
    let newArray = this.props.proportions.filter( proportion => {
      return proportion.cocktail_id === cocktailId
    })
    return newArray.map( proportion => {
      let ingredient = this.props.ingredients.find(ingredient => ingredient.id==proportion.ingredient_id)
      return {...proportion, ...ingredient}
    })
  }

  render(){
    return (
      <div id="cocktail-list">
        {this.getCocktails()}
      </div>
    )
  }
}

export default CocktailsList
