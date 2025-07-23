
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <p>{props.name} {props.exercise_count}</p>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part name={props.parts[0].name} exercise_count={props.parts[0].exercise_count}/>
      <Part name={props.parts[1].name} exercise_count={props.parts[1].exercise_count}/>
      <Part name={props.parts[2].name} exercise_count={props.parts[2].exercise_count}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.count}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [
    { name: 'Fundamentals of React', exercises: {exercises1}},
    { name: 'Using props to pass data', exercises: {exercises2}},
    { name: 'State of a component', exercises: {exercises3}}
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total count={exercises1 + exercises2 + exercises3} /> 
    </div>
  )
}

export default App