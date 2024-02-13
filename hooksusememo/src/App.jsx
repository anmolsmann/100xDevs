/* import { useState } from "react";

function app(){
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(1)
  
  let count = 0
  for (let i = 1; i <= inputValue; i++) {
    count = count +i
  }

  return <div>
    <input onChange={function(e){
      setInputValue(e.target.value)
    }} placeholder={"Find the sum from 1 to n"}/>
    <br />
    Sum from 1 to {inputValue} is {count}
    <br />
    <button onClick={()=>{
      setCounter(counter+1)
    }}>Counter {(counter)}</button>
  </div>
}

export default app */

import { useEffect, useMemo, useState } from "react";

function app(){
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(1)
  const [count, setCount] = useState(2)

  /* let count = useMemo(()=>{
    console.log("Memo got called")
    let finalCount=0
    for (let i = 1; i < inputValue; i++) {
      finalCount = finalCount+1
    }
    return finalCount
  }, [inputValue]) */

  useEffect(()=>{
    let finalCount =0
    for (let i =1; i<=inputValue; i++){
      finalCount = finalCount+i
    }
    setCount(finalCount)
  }, [inputValue])
  //two re-renders happen because of an extra state variable  


  return <div>
    <input onChange={function(e){
      setInputValue(e.target.value)
    }} placeholder={"Find the sum from 1 to n"}/>
    <br />
    Sum from 1 to {inputValue} is {count}
    <br />
    <button onClick={()=>{
      setCounter(counter+1)
    }}>Counter {(counter)}</button>
  </div>
}

export default app