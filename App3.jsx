const Hello = () => {
const a = 10
const b = 20
console.log(a+b)

  return(
    <div>
      <p>My name is tareq</p>
      <p>i am a cse student</p>
      {a} plus {b} {a+b}
    </div>
  )
}

const App = () =>{
  return(
    <div>
    <p>react is fun!</p>
    <Hello />
    <Hello />
    </div>
  )
}
export default App
