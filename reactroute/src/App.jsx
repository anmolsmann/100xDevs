import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
import { Landing } from './pages/landing'

function App(){
  const navigate = useNavigate()
  return (
  <div> 
    <div>
      <button onClickCapture={()=>{
        //window.location.href = "/"
        useNavigate("/")
      }}>Landing</button>

      <button onClick={()=>{
        //window.location.href = "/dashboard"
        useNavigate("/dashboard")
      }}>Dashboard</button>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  
  </div>
  )
}

export default App