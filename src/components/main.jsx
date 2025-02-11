import '../styles/main.css'
import GetRecipe from './recipe'
import GetIngredientSection from './ingredients'
import { getRecipeFromMistral } from '../ai'
import React from 'react'


export default function Main(){
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
        />
        <button>Add Ingredient</button>
      </form>
      
      <GetIngredientSection 
        ingredient = {ingredients}
        getRecipe = {getRecipe}
        />

      {Recipe && <GetRecipe recipe = {Recipe}/>}
    
    </main>
  )
}