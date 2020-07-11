import React, {useState} from 'react'
import Persons from './persons'
import Filter from './filter'
import PersonForm from './personForm'

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filter, setFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1)

  const addPerson = (event)=>{
    event.preventDefault();
    const valuesCompleted = newName && newNumber
    if(valuesCompleted){
      const personAlreadyExist = persons.find(
        person =>{
          return person.name === newName
        }
      )
      if(personAlreadyExist){
        alert(`${newName} is already added to phonebook`)
      }else{
        setPersons(persons.concat({name:newName, number:newNumber}))
      }
      setNewName('')
      setNewNumber('')
    }else{
      alert(`You need to complete the name and the number`)
    }   
  }
  
  const filterPersons = event => {
    setFilter(event.target.value)
    if(event.target.value){
      setShowAll(false)
    }else{
      setShowAll(true)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filter={filter} 
          filterPersons={filterPersons} />
      
      <h3>add a new</h3>
        <PersonForm 
          addPerson={addPerson} 
          newName={newName} 
          setNewName={setNewName}
          newNumber={newNumber}
          setNewNumber={setNewNumber} />
      
      <h3>Numbers</h3>
        <Persons persons={personsToShow}/>
    </div>
  )
}

export default App