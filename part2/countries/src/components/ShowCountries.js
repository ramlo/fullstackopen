import React from 'react'
import ShowCountryDetails from './ShowCountryDetails'


const ShowCountries = ({countries, setFilter}) =>{
    if (countries.length === 1){
      return (
        <div>
          {console.log('showOnly 1')}
          {countries.map( country => 
              <ShowCountryDetails country={country} key={country.name} />
            )
          }
        </div>
      )
    }
    else if(countries.length <= 10){
      return (
        <div>
          {countries.map( country => {
            return (
              <div key={country.name}>{country.name}
                <button onClick={()=>setFilter(country.name)}>show</button>
              </div>
            )}
          )}
        </div>
      )
    }else{
        return(
          <div>Too many matches, specify another filter</div>
      )
    } 
}

export default ShowCountries