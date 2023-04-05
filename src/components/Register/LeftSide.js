import React from "react";
import "./LeftSide.css";
import BackgroundImage from "../../images/background.jpg";

const LeftSide =()=>{
    return(
        <div class="left-side">
        <img src={BackgroundImage} className="background-image" alt="background"/>
        <p className="alreadyacc">Already have an account?</p>
        <button className="login">LOGIN</button>
        <p className="discover">Discover new things on Superapp</p>
        </div>
    )

}

export default LeftSide;
