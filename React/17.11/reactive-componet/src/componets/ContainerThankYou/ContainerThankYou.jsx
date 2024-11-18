import React from "react";
import imgThank from "../../images/illustration-thank-you.svg";
import "./ContainerThankYou.css"

const ContainerThankYou = (props)=>{

    return (
        <div class="container thankYou hidden">
        <img src={imgThank} alt="imgThank" />
        <div class="result">You selected out {props.userChoice} of 5</div>
        <div class="title">Thank you!</div>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
    )
}

export default ContainerThankYou