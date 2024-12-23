import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Recipe } from "./Recipes";
import { Delete } from "lucide-react";
import { api } from "@/utils/api";
import { Link } from "react-router-dom";

function RecipeCard({
  title,
  image,
  ingredients,
  instructions,
  category,
  id,
  setRecipesData,
}: Recipe) {
  async function deleteRecipe(id: string | undefined): Promise<void> {
    if (!id) return; // Make sure there's an ID
    try {
      await api.delete("recipes/" + id);
      setRecipesData((prevData) =>
        prevData.filter((recipe) => recipe.id !== id)
      );
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  }

  return (
    <Card className="max-w-sm rounded-lg overflow-hidden shadow-lg">
      <Link to={`/RecipePage/${id}`}>
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-semibold text-primary">
            {title}
          </CardTitle>
          <CardDescription className="text-sm  mt-1">
            {instructions}
          </CardDescription>
        </CardHeader>
        <CardContent className="relative">
          <img
            src={image}
            alt="image"
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </CardContent>
        <CardFooter className="p-4">
          <p className="text-sm">{`Category: -${category}`}</p>
        </CardFooter>
      </Link>
      <div className="flex justify-end mx-3 mb-3 w--[50px]">
        <button
          className="cursor-pointer"
          onClick={() => {
            deleteRecipe(id);
          }}
        >
          <Delete />
        </button>
      </div>
    </Card>
  );
}

export default RecipeCard;
