import { useState } from 'react'
const Button = ({ exe, text }) => {
  return (
    <button onClick={exe}>
      {text}
    </button>
  )
}
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Statistic = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={good + neutral + bad} />
        <StatisticLine text='average' value={(good - bad) / (good + neutral + bad)} />
        <StatisticLine text='positive' value={(good / (good + neutral + bad)) * 100 + ' %'} />
        </tbody>
      </table>
    </div>
  )
  // use table for better view
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button exe={() => setGood(good + 1)} text='good' />
        <Button exe={() => setNeutral(neutral + 1)} text='neutral' />
        <Button exe={() => setBad(bad + 1)} text='bad' />
      </div>
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App