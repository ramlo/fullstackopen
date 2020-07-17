import React from 'react'
import CountryWeather from './CountryWeather'

const ShowCountryDetails = ({country}) =>{
    return(
      <div>
        <h2> {country.name} </h2> 
        <div> capital {country.capital} </div>
        <div> population {country.population} </div>
        <h3>languages</h3>
        <ul>
          {country.languages.map( language =>    
            <li key={language.name}> {language.name} </li>
          )}
        </ul>
        <img alt="Flag" with="100px" height="100px" src={country.flag} />
        <CountryWeather country={country}/>
      </div>
    )
}

export default ShowCountryDetails