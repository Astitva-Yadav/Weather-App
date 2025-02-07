import React, { useEffect } from 'react'
import'./weather.css'
import search_icon from '../assets/search.png'
import cloud_icon from '../assets/cloud.png'
import wind_icon from '../assets/wind.png'
import dizzle_icon from '../assets/dizzle.png'
import rain_icon from '../assets/rain.png'
import humidity_icon from '../assets/humidity.png'
import clear_icon from '../assets/clear.png'
const Weather = () => {
    const search= async(city)=>{
        try{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`;
            const response=await fetch(url);
            const data=await response.json();
            console.log(data);
        }
        catch(error){

        }
    }
    useEffect(()=>{
        search("London");
    },[])
  return (
    <div className='weather'>
        <div className="search-bar">
            <input type="text" placeholder='Search'/>
            <img src={search_icon} alt='' width="28" height="25"/>
        </div>
        <img src={clear_icon} alt='' className="weather_icon"/>
        <p className='temperature'>16&deg;</p>
        <p className='Location'>London</p>
        <div className="weather-data">
            <div className="col">
                <img src={humidity_icon} alt="" width="60" height="60"/>
                <div>
                    <p>91%</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className="col">
                <img src={wind_icon} alt="" width="60" height="60"/>
                <div>
                    <p>3.5km/h</p>
                    <span>Wind</span>
                </div>
            </div>

        </div>
        
      
    </div>
  )
}

export default Weather
