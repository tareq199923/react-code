import React from 'react'

const Header = ({course}) => {
  console.log('hedaer is..',course)
  return (
    <h1>
    {course.name}
    </h1>
  )
}

const Parts = ({part}) => {
  console.log('parts data are..', part)
  return(
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  )
}

const Content = ({part}) => {
  console.log('content is..', part)
  return(
    <div>
      {part.map(part=>(
        <Parts key ={part.id} part={part} />
      ))}
    </div>
  )
}

const Course = ({course}) =>{
  console.log('course is', course)
  return(
    <div>
     <Header course={course}/>
     <Content part={course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    name : 'MD Jahidul Islam',
    id : 1,
    parts : [
    
    {
      name : 'fandament of React',
      exercises : 10,
      id : 1,
    },

    {
      name :'Using props to pass data' ,
      exercises : 7,
      id : 2,
    },

    {
      name :'State of a component' ,
      exercises : 7,
      id : 3,
    },
            ]

  }
  return (
    <div>
    <Course course={course}/>
    </div>
  )
}

export default App
