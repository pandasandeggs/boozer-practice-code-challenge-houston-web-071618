import React, { Component } from 'react'

class Form extends Component {

  state = {
    ingredients: []
  }

  let newIngredients
  addIngredient = () => {
    if(this.state.ingredients.length){
      newIngredients = this.state.ingredients.map( ingredient => {
        return (
          <div className="container">
          <p>Ingredient Name<br/>
          <input type="text"/>
          </p>

          <p>Quantity<br/>
          <input type="text"/>
          </p>
        </div>
        )
      })
    }
  }

  handleClick = (event) => {
    this.setState = ({
      ingredients: [...this.state.newIngredients]
    })
  }

  render(){
    return (
      <form className="floater">
        <h3>Create a Cocktail</h3>

        <p>Name</p>
        <input type="text" />

        <p>Description</p>
        <input type="text"/>

        <p>Instructions</p>
        <input type="text"/>

        <h3>Proportions</h3>
        <div className="container">
          <p>Ingredient Name<br/>
          <input type="text"/>
          </p>

          <p>Quantity<br/>
          <input type="text"/>
          </p>
        </div>

        <p><button onClick={this.handleClick}> + </button></p>

        <input type="submit"/>
      </form>
    )
  }
}

export default Form
