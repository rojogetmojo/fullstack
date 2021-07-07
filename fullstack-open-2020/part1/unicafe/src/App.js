import React, { useState } from 'react'

const Statistics = ({good , bad , neutral , all , average , positive}) => {
  if (good === 0 & neutral === 0 & bad === 0){
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <tr><Statistic text = "good" value = {good} /></tr>
        <tr><Statistic text = "neutral" value = {neutral} /></tr>
        <tr><Statistic text = "bad" value = {bad} /></tr>
        <tr><Statistic text = "all" value = {all} /></tr>
        <tr><Statistic text = "average" value = {average} /></tr>
        <tr><Statistic text = "positive" value = {positive + '%'} /></tr>
      </tbody>
    </table>
  );}
const Statistic = ({text , value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}; 


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const ClickGood = () => {
    setGood(good + 1); 
  }
  const ClickNeutral = () => {
    setNeutral(neutral + 1); 
  }
  const ClickBad = () => {
    setBad(bad + 1 ) ; 
  }

  const all = good + neutral + bad ;
  const average = ((good - bad ) / all);
  const positive = (good / all ) * 100

  console.log("dsda: " + good);
  

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={ClickGood}>good</button>
      <button onClick={ClickNeutral}>neutral</button>
      <button onClick={ClickBad}>bad</button>
      <h3>statistics</h3>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App