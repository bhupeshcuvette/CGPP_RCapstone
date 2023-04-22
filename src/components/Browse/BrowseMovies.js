import React , {useState,useEffect} from "react";
import GenerateMovies from "./GenerateMovies";
import ToggleBtn from "../../images/toggle-btn.png";
import { useNavigate } from "react-router-dom";

import "./BrowseMovies.css";

const BrowseMovies=()=>{
    const donavigate=useNavigate();
    const handleClick=()=>{
        donavigate("/homepage");
    }
    const prevSelCatagories = JSON.parse(window.localStorage.getItem("entertainmentData"));
    return(
        <div className="all-movies">
            <img src={ToggleBtn} className="t-button" onClick={handleClick}></img>
            <p className="sup-app">Super app</p>
            <p className="choice-text">Entertainment according to your choice</p>
            <div className="display-all-movies">
            {prevSelCatagories.map((listMovies)=><GenerateMovies allMovies={listMovies}/>)}
            </div>
        </div>
    )

}

export default BrowseMovies;