import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () =>{
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const save = (personNew) =>{
    const request = axios.post(baseUrl,personNew)
    return request.then(response => response.data)
}

const deletePerson = (id) =>{
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response =>response.data)
}

const update = (id,person) =>{
    console.log("Person To Be Updated",person);
    const request = axios.put(`${baseUrl}/${id}`, person)
    return request.then(response =>response.data)
}

export default {getAll,save,deletePerson,update}