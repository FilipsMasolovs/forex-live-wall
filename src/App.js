import React, { useState, useEffect } from 'react'

import './App.css'

import Data from './components/data/data'
import CurrencyField from './components/currencyField/currencyField'
import Button from './components/button/button'

export default function App() {
  const [currencies, setCurrencies] = useState([])
  const [currencyToCheck, setCurrencyToCheck] = useState('')
  const [data, setData] = useState({})

  useEffect(() => {
    window.fetch(
      'https://financialmodelingprep.com/api/v3/forex?apikey=75c7f5fbe7771ebab083933099ba19bc',
      { method: 'GET', redirect: 'follow' }
    )
      .then((response) => response.json())
      .then((result) => {
        setCurrencies(result)
      })
      .catch((error) => console.log('error', error))
  }, [])

  const getCurrencyData = () => {
    setInterval(function () {
      window.fetch(
        `https://financialmodelingprep.com/api/v3/quote/${currencyToCheck.replace('/', '')}?apikey=75c7f5fbe7771ebab083933099ba19bc`,
        { method: 'GET', redirect: 'follow' }
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result)
        })
        .catch((error) => console.log('error', error))
    }, 2000); // Set an interval to update the currency data
  }

  return (
    <div className='forex-live-wall'>
      <Data
        data={data}
      />
      <CurrencyField
        currencies={currencies.forexList}
        currencyToCheck={currencyToCheck}
        setCurrencyToCheck={setCurrencyToCheck}
      />
      <Button
        buttonText='Search'
        handleButtonClick={getCurrencyData}
      />
    </div>
  )
}