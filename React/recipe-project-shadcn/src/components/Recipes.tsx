import { api } from "@/utils/api";
import { useEffect, useState } from "react";
import RecipeCard from "./recipeCard";
import { Link } from "react-router-dom";

// Define the Recipe interface
export interface Recipe {
  id?: string;
  title: string;
  image: string;
  ingredients: string[];
  instructions: string;
  category: string;
  setRecipesData?: React.Dispatch<React.SetStateAction<Recipe[]>>;
}

// Recipes component
function Recipes() {
  const [recipesData, setRecipesData] = useState<Recipe[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("recipes");
        setRecipesData(data); // Assuming 'recipeData' is an array of recipes
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    })();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2  lg:grid-cols-3  ">
      {recipesData.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          image={recipe.image}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          category={recipe.category}
          setRecipesData={setRecipesData}
        />
      ))}
    </div>
  );
}

export default Recipes;
