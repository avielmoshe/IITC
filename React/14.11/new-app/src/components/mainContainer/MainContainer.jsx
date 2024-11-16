import './MainContainer.css';

import img1 from "../../images/image-omelette.jpeg"
import React from "react";
import Recipe from "../recipe/Recipe.jsx";
import Head from "../head/Head.jsx";

const MainContainer = () => {
  return <div className="main-container">
    <img src={img1} alt="img" />
  <Head />
  <Recipe />
  </div>;
};

export default MainContainer;
