import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError] = useState(false)
    const API_URL='https://api.openweathermap.org/data/2.5/weather';
    const API_KEY="1f59944b6defc25a096de66227fdf624";
    
    async function getWeatherInfo(){
        try{
        let res =await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let info = await res.json();
        console.log(info);
        let result = {
            city:info.name,
            temp :info.main.temp,
            maxTemp:info.main.temp_max,
            minTemp:info.main.temp_min,
            humidity:info.main.humidity,
            feelsLike:info.main.feels_like,
            weather:info.weather[0].description
        }
        console.log(result);
        return result;
    }catch(err){
        throw err;
    }
    }

    function handleChangeCity(evt){
        setCity(evt.target.value);
    }

    async function onSubmitForm(evt){
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    }
    return(
        <div className="SearchBox">
            <h3>Find your city weather!</h3>
            <form onSubmit={onSubmitForm}>
            <TextField id="city" label="Your City" variant="outlined" size="small" required onChange={handleChangeCity} value={city}/>
            <br />
            <br />
            <Button variant="contained" type="submit">Find!</Button>
            {error && <p style={{color:"red"}}>We are trying to add your place also!</p>}
            </form>
        </div>
    );
}