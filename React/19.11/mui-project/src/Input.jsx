import { useState, useEffect } from "react";

function Input() {
  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log(text);
  });

  const addPokemon =(e)=>{

  }
  return (
    <>
        <form onSubmit={addPokemon}>
      <div>
        <h1>Inputs in react</h1>
        <label htmlFor="input">Type something</label>
        <input
          value={text}
          type="text"
          name="input"
          id="input"
          onChange={handleInput}
        />
      </div>
      <div>
      <label htmlFor="abilitiy">Abilitiy</label>
        <input
          value={text}
          type="text"
          onChange={handleInput}
        />
      </div>
      <div>
        <label htmlFor="type">Type:</label>
        <select name="" id=""></select>
      </div>
        </form>
    </>
  );
}

export default Input;
