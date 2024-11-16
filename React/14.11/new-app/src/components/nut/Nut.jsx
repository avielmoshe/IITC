import './Nut.css';


import React from "react";

const Nut = () => {
  return <div className="nut">
           <h2 class="h-color">Nutrition</h2>
           <p>The table below shows nutritional values per serving without the additional fillings.</p>
           <div class="table">
              <div>Calories</div> 
              <div>277kcal</div>
              <hr></hr>
              <div>Carbs</div> 
              <div>0g</div>
              <hr></hr>
              <div>Protein</div> 
              <div>20g</div>
              <hr></hr>
              <div>Fat</div> 
              <div>22g</div>
           </div>
         </div>;
};

export default Nut;
