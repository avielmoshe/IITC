import "./App.css";
import { useState } from "react";
import ChildComp from "./components/ChildComp.jsx";

function App() {
  const [counter, setCounter] = useState(0);
  const addToCurrentCount = () => {
    setCounter(counter + 1);
  };
  const removeToCurrentCount = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      Maccabi haifa
      <h1>counter App</h1>
      <div className="counter-container">
        <button onClick={removeToCurrentCount}>-</button>
        <p>{counter}</p>
        <button onClick={addToCurrentCount}>+</button>
      </div>
      <ChildComp title="Maccabi haifa" description="1913" />
    </div>
  );
}

export default App;
