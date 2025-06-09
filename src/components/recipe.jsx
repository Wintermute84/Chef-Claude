import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function GetRecipe(props){
  const recipeMarkdown = props.recipe
  return(
    <section className='suggested-recipe-container' style={props.darkMode ? {color:"#7486a0"}:undefined}>
      <h2>Chef Claude Reccomends:</h2>
      { <Markdown remarkPlugins={[remarkGfm]}>{recipeMarkdown}</Markdown>}
    </section>
  )
}