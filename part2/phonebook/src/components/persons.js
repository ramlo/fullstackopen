import React from 'react'

const Persons = ({persons, deletePerson}) =>{
    return (
        <React.Fragment>
        {persons.map(person =>{
            return(
                <div key={person.id}>
                {person.name} {person.number}
                 <button onClick={()=>deletePerson(person)}>delete</button>
                </div>)
        })
        }
        </React.Fragment>
    )
}

export default Persons