import "./App.css";

import { TextField, Avatar } from "@mui/material";
import Input from "./Input.jsx";

const DUMMY_USERS = [
  { id: "25448", fullName: "Yossef sabag", url: "" },
  { id: "89566", fullName: "Aviel moshe", url: "" },
];

function App() {
  return (
    <>
      <div></div>
      <div className="card">
        {DUMMY_USERS.map((user) => {
          return (
            <div key={user.id}>
              <Avatar alt="Remy Sharp" src={user.url} />
            </div>
          );
        })}
        <Input />
      </div>
    </>
  );
}

export default App;
