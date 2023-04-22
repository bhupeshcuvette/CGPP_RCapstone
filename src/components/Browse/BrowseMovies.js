import React , {useState,useEffect} from "react";
import GenerateMovies from "./GenerateMovies"
import "./BrowseMovies.css";

const BrowseMovies=()=>{
    const prevSelCatagories = JSON.parse(window.localStorage.getItem("entertainmentData"));
    return(
        <div className="all-movies">
            <p className="sup-app">Super app</p>
            <p className="choice-text">Entertainment according to your choice</p>
            <div className="display-all-movies">
            {prevSelCatagories.map((listMovies)=><GenerateMovies allMovies={listMovies}/>)}
            </div>
        </div>
    )

}

export default BrowseMovies;