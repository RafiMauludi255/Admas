import { recipes } from "./Tes2Data";

export default function Recipes() {
  const listItems = recipes.map((recipe) => (
    <div key={recipe.id}>
      <h2>{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map((ingredients) => (
          <li key={recipe.id}>{ingredients}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div>
      <h1>Recipes</h1>
      <p>{listItems}</p>
    </div>
  );
}
