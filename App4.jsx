const Hello = (props) => {
console.log(props)
  return(
    <div>
      <p>My name is {props.name}</p>
      <p>I am a {props.job}</p>
      
    </div>
  )
}

const App = () =>{
  return(
    <div>
    <p>React is fun!!!</p>
    <Hello name = "Tareq" job ="Cse Student" />
    <Hello name = "Jahidul" job = "Devloper" />
    <Hello name = "Islam" job = "Basketball Player" />

    </div>
  )
}
export default App
