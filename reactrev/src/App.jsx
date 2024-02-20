/* import { useEffect, useState } from 'react'
import './App.css'

// useEffect
function App(){
  const[exchangeData, setExchangeData] = useState({})
  const[bankData, setBankData] = useState({})

  useEffect(function(){
    setTimeout(() => {
      setBankData({
        income: 100})
    }, 3000);   
  }, [])

  useEffect(function(){
    setTimeout(() => {
      setExchangeData({
        returns: 100
      })
    }, 1000);
  }, [])

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3

  return (
    <div>
      Hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default App
 */

import { useEffect, useMemo, useState } from 'react'
import './App.css'

// useMemo
function App(){
  const[exchange1Data, setExchange1Data] = useState({})
  const[exchange2Data, setExchange2Data] = useState({})
  const[bankData, setBankData] = useState({})

  useEffect(function(){
    setExchange1Data({
      returns: 100
    }) 
  }, [])

  useEffect(function(){
    setExchange2Data({
      returns: 100
    }) 
  }, [])

  useEffect(()=>{
    setTimeout(() => {
      setBankData({
        income: 100
      })
    }, 5000);
  })

  const cryptoReturns = useMemo(()=>{
    return exchange1Data.returns + exchange2Data.returns
  }, [exchange1Data, exchange2Data])

  const incomeTax = (bankData.income + cryptoReturns) * 0.3

  return (
    <div>
      Hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default App


