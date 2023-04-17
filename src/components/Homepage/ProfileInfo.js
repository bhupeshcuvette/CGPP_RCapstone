import React from "react";
import "./ProfileInfo.css";
import ProfilePic from "../../images/profilepic.png";

const ProfileInfo=()=>{
    const userInputs= JSON.parse(window.localStorage.getItem("formData"));
    const selectedCategories= JSON.parse(window.localStorage.getItem("entertainmentData"));
    return(
        <div className="profile-info">
            <div className="pic-profile">
                <img src={ProfilePic} className="display-pic"></img>
            </div>
            <div className="user-info-col">
                <span className="user-name">{userInputs.name}</span>
                <span className="user-mail">{userInputs.email}</span>
                <span className="user-username">{userInputs.username}</span>
                <div className="display-all-categories">
                    {
                        selectedCategories.map((category)=>(
                            <div className="display-sel-catagory">
                                <span>{category}</span>
                                <p id={category} className="del-btn">X</p>
                                </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default ProfileInfo;