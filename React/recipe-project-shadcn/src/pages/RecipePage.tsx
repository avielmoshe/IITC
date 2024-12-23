import { Recipe } from "@/components/Recipes";
import { api } from "@/utils/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function RecipePage() {
  const [recipesData, setRecipesData] = useState<Recipe | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`recipes/${id}`);

        setRecipesData(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen bg-card py-12 px-6 sm:px-12 lg:px-24 animate-fade-in">
      {/* Recipe Header */}
      <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden">
        <img
          className="w-full h-72 object-cover rounded-t-lg"
          src={recipesData?.image}
          alt={recipesData?.title}
        />
        <div className="p-6">
          <h1 className="text-4xl font-extrabold text-primary mb-4">
            {recipesData?.title}
          </h1>
          <div className="text-xl font-semibold text-primary mb-4">
            Category: {recipesData?.category}
          </div>

          {/* Ingredients Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-primary">Ingredients</h2>
            <ul className="list-disc pl-6 mt-2 text--primary-foreground">
              {recipesData?.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-primary">
              Instructions
            </h2>
            <p className="mt-2 text-destructive-foreground">
              {recipesData?.instructions}
            </p>
          </div>

          {/* Button */}
          <button
            onClick={() => navigate("/")}
            className="w-full py-3 mt-6 bg-primary text-white rounded-lg shadow-md hover:bg-destructive transition duration-300"
          >
            Back To Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
