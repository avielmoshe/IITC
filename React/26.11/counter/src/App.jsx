import { Provider } from "react-redux";
import { store } from "./store/index.js";
import Counter from "./components/Counter.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Redux counter</h1>
          <Counter />
        </div>
      </Provider>
    </>
  );
}

export default App;
