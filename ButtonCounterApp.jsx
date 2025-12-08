import React, { useState } from 'react'

const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}

const Button= ({onClick , text}) => {
  return (
    <div>
     <button
      onClick = {onClick}>
        {text}
      </button>
    </div>
  )
}

const App = () => {
  const [counter,setCounter] = useState (0)
  const handleIncrease = () => {setCounter(counter + 1)}
  const handleDecrease = () => {setCounter(counter - 1)}
  const handleReset = () => {setCounter(0)}

  return (
    <div>
     <Display counter={counter}/>
     <Button onClick ={handleIncrease} text = "+" />
      <Button onClick ={handleDecrease} text = "-" />
       <Button onClick ={handleReset} text = "0" />
    </div>
  )
}

export default App
