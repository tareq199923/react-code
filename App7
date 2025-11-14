const App = () => {
  const a=10
  const b=20
  const now = new Date ()
  console.log(now,a+b)

  return(

    <div>
    <p> today is {now.toString()}  </p>

    <p> a={a} b={b} , a+b is = {a+b} </p>

    <Features name ="jahidul"/>
    <Features name = "tareq"/>
    <Info title ="straw hat pirates"/>
    </div>
  )
}

const Features = (props) => {

const a = 10
const b = 16
console.log(a+b,props)

return (
  <div>

  <p>my age is {a+b}</p>
  <p>my name is {props.name}</p>
  
  </div>
)

}

const Info = (props) => {
  const friend = [
                 {name:"Luffy", age:25},
                 {name:"zoro", age:27}
                 ]
  
  console.log(props)
  return(

    <div>
    
    <h1>{props.title}</h1>
    <p>My name is {friend[0].name} I am {friend[0].age}</p>
    <p> My name is {friend[1].name} I am {friend[1].age}</p>
    </div>
  )
}


export default App
