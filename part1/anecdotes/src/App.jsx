import { useState } from 'react'
const Button = ({ onClick, text }) => (
  <div>
    <button onClick={onClick}>
      {text}
    </button>
  </div>
)
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [votes,setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <Button text={'vote'} onClick={() => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)
      }
      } /><Button text={'next anecdote'} onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} />
      <h1>Anecdote with most votes</h1>
      {anecdotes[votes.indexOf(Math.max(...votes))]}
      <p>has {Math.max(...votes)} votes</p>
    </div>
  )
}

export default App
