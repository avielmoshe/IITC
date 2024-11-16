import './Head.css'

import React from "react";
import Intro from "../intro/Intro.jsx";
import PrepTime from "../prepTime/PrepTime.jsx";

const Head = () => {
  return <div className="head">
  <Intro/>
  <PrepTime/>
  </div>;
};

export default Head;
