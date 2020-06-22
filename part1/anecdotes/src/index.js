import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = (props)=>{
  const [selected, setSelected] = useState(0)
  //Create array and initialize in 0
  const [points, setPoints] = useState(new Array(6).fill(0))
  const [indexMaxVoted, setIndexMaxVoted] = useState(0)

  const getRandomAnecdote = () =>
  {
    let randomNumber= Math.floor(Math.random() * props.anecdotes.length)
    setSelected(randomNumber)
  }
  
  const vote = ()=>{
    const copy = [...points]
    copy[selected]+=1
    setPoints(copy)
    //Control if exits new Max voted
    if( points[indexMaxVoted] < (points[selected]+1) ){
      setIndexMaxVoted(selected)
    }
  }

  return(
    <div>
      <h1>Acecdote of the day</h1>
      {props.anecdotes[selected]}
      <br /> 
      has {points[selected]} votes
      <br /> 
      <button onClick={getRandomAnecdote}>next anecdote</button>
      <button onClick={vote}>vote</button>
      <h1>Acecdote with most votes</h1>
      <br />
      {props.anecdotes[indexMaxVoted]}
      <br /> 
      has {points[indexMaxVoted]} votes
      <br />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
)
