import React,{useState,useEffect} from "react";
import "./GenerateMovies.css";

const GenerateMovies =({allMovies})=>{
    const [curMovies,setcurMovies] = useState([]);
    useEffect(()=>{
        const rapidApiMovie={
            method : "GET",
            headers:{
                'X-RapidAPI-Key': 'b40cd02e32msh24af68230044d77p1f2eaajsnac1d25598da1',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'}

        }

        const fetchMovies = async()=>{
            await fetch(`https://moviesdatabase.p.rapidapi.com/titles?genre=${allMovies}&year=2020`,rapidApiMovie).then(
                async(data)=>await data.json()).then((data)=>setcurMovies(data.results.slice(0,4)))
        }
        fetchMovies();
    },[])
        return(
            <div className="all-display">
                <span className="genre-title">{allMovies}</span>
                <div className="display-movies">
                    {
                        curMovies.map((lMovies)=>{
                            return(
                                <div className="fin-movie">
                                    <img src={lMovies.primaryImage.url} className="disp-fin-movie"></img>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    

}

export default GenerateMovies;