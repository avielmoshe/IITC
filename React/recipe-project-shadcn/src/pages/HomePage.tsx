import Recipes from "@/components/Recipes";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1>Welcome to Recipe4U</h1>
      <Recipes />
    </div>
  );
}

export default HomePage;
