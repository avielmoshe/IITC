import Products from "./components/Products";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Redux cart With toolKit</h1>
        <Products />
        <Cart />
      </div>
    </>
  );
}

export default App;
