import React from 'react'


const CocktailDisplay = (props) => {

  const proportionList = () => {
    return props.proportions.map(proportion =>{
        return <li>{proportion.amount} {proportion.name}</li>
    })
  }

  return (
    <div id="cocktail-display">
      <h1>{props.cocktail.name}</h1>
      <h3>Description: {props.cocktail.description}</h3>
      <p>Instructions: {props.cocktail.instructions}</p>
      <ul>Proportions: {proportionList()}</ul>
    </div>
  )
}

export default CocktailDisplay
