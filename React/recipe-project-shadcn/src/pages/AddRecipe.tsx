import { RecipeForm } from "@/components/RecipeForm";
import { api } from "@/utils/api";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleFormSubmit = async (data: {
    title: string;
    image: File | null;
    ingredients: string[];
    instructions: string;
    category: string;
  }) => {
    try {
      await api.post("recipes", data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>
      <RecipeForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default AddRecipe;
