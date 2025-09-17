import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp(){
    let [weather,setWeather] = useState({
         city:"Rajasthan",
        feelsLike: 36.05,
        humidity: 49,
        maxTemp: 33.02,
        minTemp: 33.02,
        temp: 33.02,
        weather: "broken clouds"
    });
    function updateInfo(newInfo){
        setWeather(newInfo);
    }
    return(
        <>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox wInfo={weather}/>
        </>
    )
}