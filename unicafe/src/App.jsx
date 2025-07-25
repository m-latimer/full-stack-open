import { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1>
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const StatisticLine = ({text, value}) => {
  return <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
}
const Statistics = ({good, bad, neutral}) => {
  const totalCount = good + bad + neutral
  if (totalCount === 0){
    return <div>
      <Header title='statistics'/>
      <p>No feedback given</p>
    </div>
  }
  return <div>
    <Header title='statistics'/>
    <table>
      <tbody>
        <StatisticLine text='good' value={good}/>
        <StatisticLine text='neutral' value={neutral}/>
        <StatisticLine text='bad' value={bad}/>
        <StatisticLine text='average' value={(good + (bad*-1))/totalCount}/>
        <StatisticLine text='positive' value={good/totalCount}/>
      </tbody>
    </table>
  </div>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  const increaseGood = () => setGood(good+1)
  const increaseNeutral = () => setNeutral(neutral+1)
  const increaseBad = () => setBad(bad+1)
  

  return (
    <div>
      <Header title="give feedback"/>
      <Button onClick={increaseGood} text='good'/>
      <Button onClick={increaseNeutral} text='neutral'/>
      <Button onClick={increaseBad} text='bad'/>
      
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App