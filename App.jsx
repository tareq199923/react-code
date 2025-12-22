import React, { useState } from 'react'
import Course from './Course'
import Note from './components/Note'
const App = () => {

//state 1: all notes
 const [note,setNote] = useState ([
  {id :1, content:'i am tareq', important: false},
  {id:2, content:'learning to code', important: true}
])

// state 2: user input
  const [newNote, setNewNote] = useState ('')

  const [showAll,setShowAll] = useState (true)

  const noteToShow = showAll
   ? note
   : note.filter(note=>note.important === true)

  //function
  const handleInputChange = (event) => {
    console.log('user typed:',event.target.value)
    setNewNote(event.target.value)
  }

  //function
  const addNote = (event)=> {
    event.preventDefault()
    console.log('button clicked')
    console.log('current input value:',newNote)

    if (newNote.trim()===''){
      alert('please type something')
      return
        }

    const noteObject = {
      content: newNote ,
      id: note.length + 1
    }    
    console.log('adding note',noteObject)
    setNote(note.concat(noteObject))
    setNewNote('')
  }

  const course = 
  [ 
    {
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
    {
          name: 'Redux',
          exercises: 11,
          id: 4,
    }
            ]

   },

   {
    name : 'Node.js',
    id :2,
    parts : [
    { 
          name: 'Routing',
          exercises: 3,
          id: 1,
    },
    {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
    }
            ] 
          },
   
   {
    name :'tareq',
    id : 3,
    parts :[
      {
          name: 'Middle',
          exercises: 7,
          id: 1,
    }
    ]
   } 

] 

  return (
    <div>
    {course.map(course=>(
    <Course key={course.id} course={course} />
  ))}
  <h1>My Notes</h1>
      <ul>
        {noteToShow.map(note=>
          <Note key={note.id} note={note} />
        )}
        {note.map(n => (
          <Note key={n.id} note={n} />
        ))}
      </ul>

      {/* ✅ Added: Form to add new notes */}
      <div>
        <input 
          value={newNote}
          onChange={handleInputChange}
          placeholder="Type your note here..."
        />
        <button onClick={addNote}>Save</button>
      </div>
    </div>
  )
}

export default App
