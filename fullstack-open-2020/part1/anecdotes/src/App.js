import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0);
  const [point , setPoint] = useState([0,0,0,0,0,0,0]);
  const [top, setTop] = useState(0);
  const [topIndex,setTopIndex] = useState(0);

  const handClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  };

  const voteClick = () => {
    const copy = [...point];
    copy[selected] += 1;
    setPoint(copy);

    const topNum = [...copy];
    setTopIndex(topNum.indexOf(Math.max(...topNum)));
    setTop(Math.max(...topNum));
  }

  

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p >{anecdotes[selected]}</p>
      <p>has {point[selected]}</p>
      <button onClick = {handClick} > Next anedotes </button>
      <button onClick = {voteClick} > Vote </button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[topIndex]}</p>
      <p>Has {top} points</p>

    </div>
  )
}

export default App