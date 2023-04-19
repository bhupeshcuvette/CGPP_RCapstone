import React ,{useState,useEffect} from 'react';
import Humidity from "../../images/humidity.png";
import Pressure from "../../images/pressure.png";
import Wind from "../../images/wind.png";
import "./Weather.css";

const Weather =()=>{
    const [curDate,setCurDate]=useState("");
    const [curTime,setCurTime]=useState("");
    const [curWeather,setCurWeather]=useState(false);
    const [load,setLoad]=useState(true);
    useEffect(()=>{

        const fetchWeather=async()=>{
            await fetch("http://api.weatherapi.com/v1/current.json?key=761a123e5eae44cfb0390636231804&q=Paris&aqi=no").then(
                async(data)=>await data.json()).then((data)=>setCurWeather(data)).then(()=>setLoad(false))
            
        }
        fetchWeather();
    },[])

    useEffect(()=>{
        const dateToday = new Date();
        var todayDate= dateToday.getDate();
        var todayMonth = dateToday.getMonth() + 1;
        var todayYear = dateToday.getFullYear();
        setCurDate(todayMonth + '-' + todayDate + '-' + todayYear);

        var curhours=dateToday.getHours();
        var curMinutes = dateToday.getMinutes();
        var curZone = curhours>=12?"PM":"AM";
        var fincurhours=curhours%12;
        fincurhours=fincurhours?fincurhours:12;
        setCurTime(fincurhours + ":" + curMinutes + "" + curZone);
    },[])
    return (
        <div className='weatherInfo'>
        { load?<p>Currently loading</p>:(<>
            <div className="topInfo">
                <span>{curDate}</span>
                <span>{curTime}</span>
            </div>
            <div className='bottomInfo'>
                <div className='condition'>
                    <img src={curWeather.current.condition.icon} className='weather-icon'></img>
                    <span>{curWeather.current.condition.text}</span>
                </div>
                <div className='pressure'>
                    <p className='temp-above'><span>{curWeather.current.temp_c}</span>°C</p>
                    <img src={Pressure} className='pressure-icon'></img>
                    <span>{curWeather.current.pressure_mb} mbar <br/> Pressure</span>
                </div>
                <div className='wind-humidity'>
                    <img src={Wind} className='wind-icon'></img>
                    <span className='wind-style'>{curWeather.current.wind_kph} km/h  Wind</span>
                    <br/>
                    <img src={Humidity} className='humid-icon'></img>
                    <span className='humid-style'>{curWeather.current.humidity} % Humidity </span>
                </div>
            </div>
            </>
            )}
        </div>
        
    )

}



export default Weather;
