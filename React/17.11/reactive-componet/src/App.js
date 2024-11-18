import "./App.css";
import { useState } from "react";
import ContainerRating from "./componets/ContainerRating/ContainerRating.jsx";
import ContainerThankYou from "./componets/ContainerThankYou/ContainerThankYou.jsx";

function App() {
  const [userChoice, setUserChoice] = useState(0);
  const [didUserSumbit, setDidUserSumbit] = useState(false);
  return (
    <div className="App">
      {didUserSumbit ? (
        <ContainerThankYou userChoice={userChoice} />
      ) : (
        <ContainerRating
          setUserChoice={setUserChoice}
          setDidUserSumbit={setDidUserSumbit}
          userChoice={userChoice}
        />
      )}
    </div>
  );
}

export default App;
