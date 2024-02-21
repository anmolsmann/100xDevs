/* import {Suspense, lazy} from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
const Dashboard = lazy(()=> import('./pages/dashboard'))
const Landing = lazy(()=> import('./pages/landing'))


function App(){
  return (
  <div> 
    <BrowserRouter>
      <Appbar/>
      <Routes>
        <Route path="/dashboard" element={<Suspense fallback={"..loading"}><Dashboard/></Suspense>} />
        <Route path="/" element={<Suspense fallback={"..loading"}><Landing/></Suspense>} />      
      </Routes>
    </BrowserRouter>
  </div>
  )
}

function Appbar(){
  const navigate = useNavigate()
  return(
  <div>
      <button onClickCapture={()=>{
        //window.location.href = "/"
        navigate("/")
      }}>Landing</button>

      <button onClick={()=>{
        //window.location.href = "/dashboard"
        navigate("/dashboard")
      }}>Dashboard</button>
    </div>
  )
}

export default App */

import { useState } from "react"

function App(){
  const [count, setCount] = useState(0)
  return (<div>
    <Count count={count}></Count>
    <Buttons count={count} setCount={setCount}></Buttons>
  </div>
  )
}

function Count({count}){
  return <div>
    {count}
  </div>
}

function Buttons({count, setCount}){
  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increase</button>

    <button onClick={()=>{
      setCount(count-1)
    }}>Decrease</button>
  </div>
}

export default App