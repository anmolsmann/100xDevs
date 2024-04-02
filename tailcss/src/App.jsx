import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //in tailwind we use className instead of style
  return (
    <>
      <div style= {{display: 'flex', justifyContent: 'space-around'}}>
        <div style={{backgroundColor: "red"}}>hi</div>
        <div style={{backgroundColor: "green"}}>hi</div>
        <div style={{backgroundColor: "blue"}}>hi</div>
      </div>

      <div className='flex justify-center'>
        <div className='bg-yellow-500'>hi</div>
        <div className='bg-green-500'>hi</div>
        <div className='bg-blue-500'>hi</div>
      </div>
    </>
  )
}

export default App
