export default function GetIngredientSection(props){
  const listElements = props.ingredient.map((ingredient) => <li key={ingredient}>{ingredient}</li>)
  if (props.ingredient.length > 0){
    return <section>
      <h2 style={props.darkMode ? {color:"white"}:undefined}>Ingredients on Hand:</h2>
      <ul className="ingredients-list" aria-live="polite" style={props.darkMode ? {color:"white"} : undefined}>
        {listElements}
      </ul>
      {props.ingredient.length >3 ? //if ingredients are > 3 display the get recipe div!!
      <div className="get-recipe-container" style={props.darkMode ? {backgroundColor:"black",border:"2px solid white"}:undefined}>
        <div>
          <h3 style={props.darkMode ? {color:"white"}:undefined}>Ready for a recipe?</h3>
          <p style={props.darkMode ? {color:"#a1a6b0"}:undefined}>Generate a recipe from your list of ingredients.</p>
        </div>
        <button onClick={props.getRecipe} style={props.darkMode ? {color:"black",backgroundColor:"white"}:undefined}>Get a recipe</button>
      </div> : null}
  </section> 
  }
  return null;
}