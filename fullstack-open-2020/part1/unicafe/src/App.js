import React, { useState } from 'react'


const Statistics = (props) => {
  return (
    <td>
      <tr>{props.name}</tr>
      <tr>{props.value}</tr>
    </td>
  );
}; 


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const ClickGood = () => {
    setGood(good + 1 ); 
  }
  const ClickNeutral = () => {
    setNeutral(neutral + 1); 
  }
  const ClickBad = () => {
    setBad(bad + 1 ) ; 
  }

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={ClickGood}>good</button>
      <button onClick={ClickNeutral}>neutral</button>
      <button onClick={ClickBad}>bad</button>
      <h3>statistics</h3>
      <p>good  {good}</p>
      <p>neutral  {neutral}</p>
      <p>bad  {bad}</p>
      <tr>
        <td>all</td>
        <td>{good + neutral + bad }</td>
      </tr>
      <tr>
        <td>average</td>
        <td>{(good - bad)/(good + neutral + bad)}</td>
      </tr>
      <tr>
        <td>positive</td>
        <td>{(good /(good + neutral + bad))*100}%</td>
      </tr>

    </div>
  )
}

export default App