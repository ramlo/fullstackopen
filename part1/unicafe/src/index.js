import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => {
  return (
  <div>
    <h1>
      {title}
    </h1>
  </div>
  )
}

const Button = ({text,onClick})=>{
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Static = ({text, value} )=>{
  return (
    <React.Fragment>
        <td>
          {text}
        </td>
        <td>
          {value}
        </td>
    </React.Fragment>  
  )
}

const Statics = (props) =>{
   function average(){
    return (props.good + (props.bad * -1)) / props.allVotes
  }

  function positive(){
    return ( props.good / props.allVotes ) * 100 + ' %'
  }

  if( props.allVotes === 0) {
    return(
      <div>
        No feedback given
      </div>
    )
  }
  
  return (
  <div>
    <table>
      <tbody>
      <tr>
        <Static text = { props.goodText } value ={ props.good } />
      </tr>
      <tr>
        <Static text = { props.neutralText } value = { props.neutral } />
      </tr>
      <tr>
        <Static text = { props.badText } value = { props.bad } /> 
      </tr>
      <tr>
        <Static text = 'all' value = { props.good + props.neutral + props.bad } />
      </tr>
      <tr>
        <Static text = 'average' value= { average() } />
      </tr>
      <tr>
        <Static text = 'positive' value= { positive() } />
      </tr>
      </tbody>
    </table>
  </div>
  )
}

const App = () =>{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allVotes, setallVotes] = useState(0)
  
  let goodText='good'
  let neutralText = 'neutral'
  let badText = 'bad' 
  
  const handleClickGood = () =>{
    setGood(good + 1)
    setallVotes(allVotes + 1)
  }
  
  const handleClickNeutral = () =>{
    setNeutral(neutral + 1)
    setallVotes(allVotes + 1)
  }

  const handleClickBad = () =>{
    setBad(bad + 1)
    setallVotes(allVotes + 1)
  }

  return (
    <div>
      <Header title="give feedback" />
      <Button text={goodText} onClick={handleClickGood} />
      <Button text={neutralText} onClick={handleClickNeutral}/>
      <Button text={badText}  onClick={handleClickBad}/>
      <h1>statics</h1>
      <Statics goodText={goodText} neutralText={neutralText} badText={badText} 
        good={good} neutral={neutral} bad={bad} allVotes={allVotes}/>   
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
