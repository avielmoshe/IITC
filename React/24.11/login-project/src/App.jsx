import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import QueryPrint from "./pages/QueryParams.jsx";
import DummyData from "./pages/DummyData.jsx";
import { fetchDataFn } from "./pages/DummyData.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/SignIn",
    element: <SignInPage />,
  },
  {
    path: "/query-print",
    element: <QueryPrint />,
    loader: fetchDataFn,
  },
  {
    path: "/dummy-data",
    element: <DummyData />,
    loader: fetchDataFn,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
