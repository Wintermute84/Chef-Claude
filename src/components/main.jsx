import '../styles/main.css'
import GetRecipe from './recipe'
import GetIngredientSection from './ingredients'
import { getRecipeFromMistral } from '../ai'
import React from 'react'


export default function Main(props){
  const [ingredients,addIngredient] = React.useState([])
  const [Recipe,showRecipe] = React.useState("")
  
  function addIngredients(formData){
    const newIngredient = formData.get("ingredient")
    addIngredient((prevIngredients) => [...prevIngredients,newIngredient])
  }

  async function getRecipe(){
    const recipeMarkdown = await getRecipeFromMistral(ingredients)
    showRecipe(recipeMarkdown)
  }
  
  return (
    <main> 
      
      <form 
        action={addIngredients}
        className="add-ingredient-form">
        <input 
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add Ingredient" 
          name="ingredient"
          required
          style={
            props.darkMode ? {
              border:"2px solid white",
              backgroundColor:"black",
              color:"white"
            } : undefined}
        />
        <button style={
          props.darkMode ? {
            backgroundColor:"white",
            color:"black"
            } : undefined}>
            Add Ingredient
        </button>
      </form>
      
      <GetIngredientSection 
        ingredient = {ingredients}
        getRecipe = {getRecipe}
        darkMode = {props.darkMode}
        />

      {Recipe && <GetRecipe recipe = {Recipe} darkMode = {props.darkMode}/>}
    
    </main>
  )
}