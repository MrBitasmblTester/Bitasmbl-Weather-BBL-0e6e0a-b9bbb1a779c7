import React from 'react'
interface Item{date:string;temp:number;humidity:number}
const ForecastList:React.FC<{items:Item[]}>=({items})=>{
 return(<ul>{items.map(i=>(<li key={i.date}>{i.date}:{i.temp}/{i.humidity}</li>))}</ul>);
}
export default ForecastList