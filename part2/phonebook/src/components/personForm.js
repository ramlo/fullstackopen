import React from 'react'

const PersonForm = ({addPerson,newName,setNewName,newNumber,setNewNumber})=>{  
    return (
      <form onSubmit={addPerson}>
          <div>
            name: 
            <input value={newName} 
                onChange={(event)=>setNewName(event.target.value)}/>
          </div>
          <div>number: 
              <input value={newNumber}
                onChange={(evento)=>setNewNumber(evento.target.value)} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    )
}

export default PersonForm