import React, { Component } from 'react'
import CocktailDisplay from './CocktailDisplay'

class Cocktail extends Component {

  constructor(){
    super();
    this.state = ({
      isClicked: false
    })
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      isClicked: true
    })
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <a onClick={this.handleClick} id={this.props.cocktail.id} > {this.props.cocktail.name}</a>
          </li>
        </ul>
        {this.state.isClicked ? <CocktailDisplay cocktail={this.props.cocktail} proportions={this.props.proportions} ingredients={this.props.ingredients}/> : null}
      </div>
    )
  }

}
export default Cocktail
