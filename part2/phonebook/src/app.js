import React, {useState, useEffect} from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personsService from './services/persons'
import ShowMessage from './components/ShowMessage'

const App = () => {

  const [ persons, setPersons ] = useState([])
  
  const hook = ()=>{
    personsService
      .getAll()
      .then(persons=> {
        setPersons(persons)
      })
  }

  useEffect(hook,[])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ showAll, setShowAll ] = useState(true)
  const [ message, setMessage ] = useState(null)
  const [ error, setError ] = useState(false)
  
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
        const confirm = personAlreadyExist.number !== newNumber 
          ? window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
          : alert(`${newName} is already added to phonebook`)
        
        if(confirm){
          const updatedPerson=personsService.update(personAlreadyExist.id, {name:newName, number:newNumber})
          updatedPerson.then( response =>
            {
              setPersons(persons.map(
                p => p.id  !== response.id ? p : response 
                )
              )
              setMessage(`Number Changed ${response.name} `)
              
              setTimeout(()=>{
                setMessage(null)
              },3000)
          })
          .catch(error => {
            if(error.response.statusText === 'Bad Request'){
              setMessage(error.response.data.error)
              setError(true)
            }else{
              setMessage(`Information of ${newName} has already been removed from server`)
              setError(true)
              setPersons(persons.filter(p => p.id !== personAlreadyExist.id))

            }

            setTimeout(()=>{
              setMessage(null)
              setError(false)
            },5000)
          })
        }

      }else{
        let newPerson= {name:newName, number:newNumber}
        personsService.save(newPerson).then (person =>{
          setPersons(persons.concat(person))
          
          setMessage(`Added ${person.name} `)
          
          setTimeout(()=>{
            setMessage(null)
          },3000)
        })
        .catch(err =>{
          setMessage(err.response.data.error)
          setError(true)
          
          setTimeout(()=>{
            setMessage(null)
            setError(false)
          },5000)
        })        
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
  
  const deletePerson = (person) => {
    if(window.confirm(`Delete ${person.name}`)){
      personsService.deletePerson(person.id)
      //setNotes(notes.filter(n => n.id !== id))
      setPersons(persons.filter(p => p.id !== person.id))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <ShowMessage message={message} error={error}/>
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
        <Persons persons={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App