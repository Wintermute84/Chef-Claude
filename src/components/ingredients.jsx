export default function GetIngredientSection(props){
  const listElements = props.ingredient.map((ingredient) => <li key={ingredient}>{ingredient}</li>)
  if (props.ingredient.length > 0){
    return <section>
      <h2>Ingredients on Hand:</h2>
      <ul className="ingredients-list" aria-live="polite">{listElements}</ul>
      {props.ingredient.length >3 ? //if ingredients are > 3 display the get recipe div!!
      <div className="get-recipe-container">
        <div>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button onClick={props.getRecipe}>Get a recipe</button>
      </div> : null}
  </section> 
  }
  return null;
}