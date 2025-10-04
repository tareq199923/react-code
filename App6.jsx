const App = () => {
  const friend = [
    {name: "Luffy", age: 25},
    {name: "Zoro", age: 26},
  ]
  return(
    <div>
    <p>
      {friend[0].name} {friend[0].age}
    </p>
    <p>
      {friend[1].name } {friend[1].age}
    </p>
    </div>
  )
}
export default App
