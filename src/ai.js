const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

export async function getRecipeFromMistral(ingredientsArr) {

    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${process.env.VITE_TOKEN}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost', // required by OpenRouter
        'X-Title': 'MyRecipeApp' // any title you want to give
    },
    body: JSON.stringify({
        model: 'mistralai/devstral-small', // good free model
        messages: [
        {
            role: 'user',
            content: `${SYSTEM_PROMPT} ${ingredientsArr.join(', ')}.`
        }
        ],
        max_tokens:1024,
    })
    })
    .then(res => res.json())
    .then(data => {
        return data.choices[0].message.content
    })
    .catch(err => {
        console.error('Error:', err);
    });

    return res
    
}