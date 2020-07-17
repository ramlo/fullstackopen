import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ShowCountries from './components/ShowCountries'

const App = () =>{
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState([])
    const [showAll, setShowAll] = useState(true)
    
    const hookGetCities = () => {
      axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response =>{
          setCountries(response.data)
        })
    }
    
    useEffect(hookGetCities, [])
  
    const lisfOfCountries = showAll ? countries : countries.filter(country => 
        country.name.toLowerCase().indexOf(filter.toLowerCase() ) !== -1
      )
    
    const filterCountries = (event)=>{
      setFilter(event.target.value)
      setShowAll(false)
    }
  
    return (
      <div>
        <div>
          find countries<input value={filter} onChange={filterCountries} />
        </div>
        <div>
          <ShowCountries setFilter={setFilter} countries={lisfOfCountries} />
        </div>
      </div>
    )
}

export default App