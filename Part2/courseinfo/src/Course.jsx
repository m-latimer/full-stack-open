const Header = ({name}) => <h1>{name}</h1>

const Content = ({parts}) => {
  const partComponents = parts.map(part => <Part part={part} key={part.id}/>)
  
  return <div> {partComponents} </div>
}
  
const Part = ({part}) => {
  const {name, exercises, id} = part
  return  <p>{name} {exercises}</p>
}


const Total = ({parts}) => {
  const total = parts.reduce(
    (accumulator, part) => accumulator + part.exercises,
    0,
  )
  return <p><b>total of {total} exercises</b></p>
}

const Course = ({course}) => {
  const {name, parts} = course
  return  <div>
    <Header name={name}/>
    <Content parts={parts}/>
    <Total parts={parts}/>
  </div>
}

export default Course