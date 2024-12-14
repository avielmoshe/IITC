import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Articles from "./pages/articles/Articles.jsx";
import DrawerAppBar from "./componenents/NavBar.jsx";
import Tech from "./pages/articles/tech/Tech.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <DrawerAppBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Articles" element={<Articles />}>
            <Route path="news" element={<h1>This is the news Page</h1>} />
            <Route path="tech/:id" element={<Tech />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
