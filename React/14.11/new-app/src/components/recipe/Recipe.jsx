import './Recipe.css';

import React from "react";
import Ing from "../ing/Ing.jsx";
import Inst from "../inst/Inst.jsx";
import Nut from "../nut/Nut.jsx";

const Recipe = () => {
  return <div className="recipe">
  <Ing/>
  <hr></hr>
  <Inst/>
  <hr></hr>
  <Nut/>
  </div>;
};

export default Recipe;
