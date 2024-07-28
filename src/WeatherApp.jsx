import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 40.42,
        humidity: 57,
        temp: 33.79,
        tempMax: 33.79,
        tempMin: 33.79,
        weather: "overcast clouds"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return(
        <div style= {{textAlign: "center"}}>
            <h2>Weather Information -</h2>
            <SearchBox updateInfo = {updateInfo} />
            <InfoBox info = {weatherInfo} />
        </div>
    );
}