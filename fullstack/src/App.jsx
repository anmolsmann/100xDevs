import { useState } from "react"

function App() {
  const [todo, setTodo] = useState([{
    title: "Go to the gym",
    description: "5-7",
    completed: false
  },{
    title: "prep for the gre",
    description: '8-9',
    completed: true
  }])

  function addTodo(){
    //... basically means that it takes the new todos and appends it to the old todos
    setTodo([...todo, {
      title: "New todo",
      description: "Description of the new todo"
    }])
  }


  return (
    <div>
      {/*<Todo title= {todo[0].title} description={todo[0].description}></Todo>
      <Todo title= {todo[1].title} description={todo[1].description}></Todo>*/}
      <button onClick={addTodo}>Add a random ToDo</button>
    {todo.map(function(todo){
      return <Todo title={todo.title} description={todo.description}></Todo>
    })}
    </div>
  )
}


//component 
function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>    
    </div>
}

export default App
