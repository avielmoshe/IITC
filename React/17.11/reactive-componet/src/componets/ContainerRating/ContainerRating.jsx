import React from "react";
import imgIcon from "../../images/icon-star.svg";
import "./ContainerRating.css" 

const ContainerRating = (props)=>{
    const updateChoice=(e)=>{
        props.setUserChoice(e.target.innerText)       }
const sumbitTheRating=()=>{
    props.setDidUserSumbit(true)        
}
const selectedNum=(ev)=>{
ev.target.className="selected-rating.num"
}
    return (
<div className="container rating">
        <div className="img-continer">
            <img src={imgIcon} alt="imgIcon"/>
        </div>
        <div className="title">How did we do?</div>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div id="raiting-form">
            <div className="raiting">
                {
                [1,2,3,4,5].map((num)=>(
                    <div 
                     key={num} 
                     onClick={updateChoice}
                     className={props.userChoice===String(num)?"selected-rating":""}
                     >{num}
                     </div>))
                     }
            </div>
            <button onClick={sumbitTheRating}>SUBMIT</button>
        </div>
    </div>
    )
}

export default ContainerRating