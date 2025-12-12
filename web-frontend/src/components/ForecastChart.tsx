import React from 'react'
interface Point{label:string;value:number}
interface Props{points:Point[];title?:string}
const ForecastChart:React.FC<Props>=({points,title})=>{
 return(<div><h3>{title}</h3><svg>{points.map((p,i)=>(<circle key={i} cx={i*10} cy={0} r={2}/>))}</svg></div>);
}
export default ForecastChart