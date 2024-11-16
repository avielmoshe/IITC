import './PrepTime.css';


import React from "react";

const PrepTime = () => {
  return <div className="prepTime">
    <h1 className="headOfPrep">Preparation time</h1>
    <ul>
            <li><span>Total</span>: Approximately 10 minutes </li>
            <li><span>Preparation</span>: 5 minutes</li>
            <li> <span>Cooking</span>: 5 minutes</li>
    </ul>
  </div>;
};

export default PrepTime;
