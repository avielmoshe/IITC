import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Error from "./pages/Error";
import AddRecipe from "./pages/AddRecipe";
import SettingsPage from "./pages/Settings";
import RecipePage from "./pages/RecipePage";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/add-recipe",
          element: <AddRecipe />,
        },
        {
          path: "/settings",
          element: <SettingsPage />,
        },
        {
          path: "/RecipePage/:id",
          element: <RecipePage />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
