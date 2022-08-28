import React from 'react'
import ReactDOM from 'react-dom'

const Header = (p) => {
  return (
    <div>
      <h1>{p.course}</h1>
    </div>
  )
}

const Content = (p) => {
  return (
    <div>
      <Part part={p.parts[0]} exercise={p.exercises[0]} />
      <Part part={p.parts[1]} exercise={p.exercises[1]} />
      <Part part={p.parts[2]} exercise={p.exercises[2]} />
    </div>
  )
}

const Part = (p) => {
  return (
    <div>
      <p>{p.part} {p.exercise}</p>
    </div>
  )
}

const Total = (p) => {
  const total = p.exercises[0] + p.exercises[1] + p.exercises[2];
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
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

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))