import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState({
    votes: {},
    topAnecdote: 0,
  }) 
  const [selected, setSelected] = useState(0)
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }
  const newAnecdote = () => setSelected(getRandomInt(anecdotes.length))
  const addVote = () => {
    const copy = {...votes.votes}
    let top = votes.topAnecdote
    copy[selected] = (copy[selected] | 0) + 1
    if (copy[selected] > copy[top]){
      top = selected
    }
    setVotes({
      votes: copy,
      topAnecdote: top,
    })
  
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes.votes[selected] | 0} votes</p>
      <button onClick={addVote}>vote</button>
      <button onClick={newAnecdote}>next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[votes.topAnecdote]}</p>
      <p>has {votes.votes[votes.topAnecdote] | 0} votes</p>

    </div>
  )
}

export default App