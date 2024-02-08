import { useState } from "react"

function App() {

  return(
    <div>
      <HeaderWithButton/>
      <Header title="Avneet"></Header>
    </div>
  )
}

function HeaderWithButton(){
  const [title, setTitle] = useState("Anmol")
  function updateTitle(){
    setTitle(Math.random())
  }

  return <div>
    <button onClick={updateTitle}>Update the title</button>
    <Header title={title}></Header>
  </div>
}

//memoization
//const header = React.memo(function Header({title}){
//return <div> {title} <div/> })


function Header({title}){
  return <div>
      {title}
    </div>
}

export default App
