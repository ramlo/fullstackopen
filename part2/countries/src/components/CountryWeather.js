import React, {useEffect,useState} from 'react'
import axios from 'axios'

const CountryWeather = ({country})=>{
    const api_key = process.env.REACT_APP_API_KEY
    const [weatherInfo, setWeatherInfo] = useState({})
    console.log('Country info: ',country);
    
    const hookWeather = () =>{
        const URI = `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`
        console.log('URI: ',URI) 
        axios
            .get(URI)
            .then((weather) =>{
            setWeatherInfo(weather.data.current)
            console.log(weather.data)
      })
    }

    useEffect(hookWeather, [])

    return(
      <div>
        <h3>Weather in {country.capital}</h3>
        <div><strong>temperature:</strong> {weatherInfo.temperature} Celcius</div>
        <img alt='weather of the capital city'src={weatherInfo.weather_icons?weatherInfo.weather_icons[0]: ''} />
        <div><strong>wind:</strong> {weatherInfo.wind_speed} mph direction {weatherInfo.wind_dir} </div> 
      </div>
    )
}

export default CountryWeather
