import React from 'react'
interface Props{temp?:number;humidity?:number;description?:string}
const CurrentWeatherCard:React.FC<Props>=({temp,humidity,description})=>{
 return(<div><h2>Current</h2><div>{description}</div><div>{temp}</div><div>{humidity}</div></div>);
}
export default CurrentWeatherCard