import React from "react";
import './formComp.css'

const FormComp =(props)=>{
    const updateChoice=(e)=>{
        props.setUserChoice(e.target.innerText)
}
    return(
        <div>
       <span onClick={updateChoice}>1</span>
       <span onClick={updateChoice}>2</span>
       <span onClick={updateChoice}>3</span>
       <span onClick={updateChoice}>4</span>
       <span onClick={updateChoice}>5</span>
        </div>
    )
}

export default FormComp