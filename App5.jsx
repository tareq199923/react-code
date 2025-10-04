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
  const nika="Luffy"
  const ika= "Pirate"
  return(
    <div>
    <p>React is fun!!!</p>
    <Hello name = "Tareq" job ="Cse Student" />
    <Hello name = "Jahidul" job = "Devloper" />
    <Hello name = "Islam" job = "Basketball Player" />
    <Hello name={nika} job={ika}  />

    </div>
  )
}
export default App
