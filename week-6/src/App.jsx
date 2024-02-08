import { useState } from "react"

let counter=4

function App() {
  const [toDo, setTodo] = useState([{
    "id": 1,
    "title": "Go to the gym",
    "description": "Lightweight"
  },{
    "id":2,
    "title": "Study for the gre",
    "description": "Three friggin fourty"
  },{
    "id": 3,
    "title": "Read the secret",
    "description": "We so back"
  }])

  
function addTodo(){
  setTodo([...toDo, {
    "id":counter++,
    "title": Math.random(),
    "description": Math.random()
  }])
}

  return(
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {toDo.map(todo=> <ToDo key ={todo.id} title={todo.title} description={todo.description}/>)}
    </div>
  )
}

//providing keys is of utmost importance when using array map in react

function ToDo({title, description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}

export default App
