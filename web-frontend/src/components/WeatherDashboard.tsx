import React,{useState} from 'react'
import {getCurrent,getForecast} from '../api/weatherClient'
const WeatherDashboard:React.FC=()=>{
 const[city,setCity]=useState('');
 const search=async()=>{await getCurrent(city);await getForecast(city);};
 return(<div><input value={city} onChange={e=>setCity(e.target.value)} /><button onClick={search}>Search</button></div>);
}
export default WeatherDashboard