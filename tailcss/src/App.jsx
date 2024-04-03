import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //in tailwind we use className instead of style
  return (
    <>
      {/* <div style= {{display: 'flex', justifyContent: 'space-around'}}>
        <div style={{backgroundColor: "red"}}>hi</div>
        <div style={{backgroundColor: "green"}}>hi</div>
        <div style={{backgroundColor: "blue"}}>hi</div>
      </div>

      <div className='flex justify-center'>
        <div className='bg-yellow-500'>hi</div>
        <div className='bg-green-500'>hi</div>
        <div className='bg-blue-500'>hi</div>
      </div> */}

      {/* <div className='grid grid-cols-3'>
        <div className='bg-red-500'>hello</div>
        <div className='bg-blue-500'>hello</div>
        <div className='bg-green-500'>hello</div>
      </div> */}

      <div className='bg-yellow-500 md:bg-blue-500'>
        Hello
      </div>
    </>
  )
}

export default App
