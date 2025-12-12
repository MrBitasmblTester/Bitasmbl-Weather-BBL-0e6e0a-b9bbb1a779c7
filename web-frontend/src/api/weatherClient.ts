const BASE_URL = import.meta.env.VITE_WEATHER_API_URL || '';
export async function getCurrent(city:string){
  const r = await fetch(`${BASE_URL}/weather/current?city=${city}`);
  return r.json();
}
export async function getForecast(city:string){
  const r = await fetch(`${BASE_URL}/weather/forecast?city=${city}`);
  return r.json();
}