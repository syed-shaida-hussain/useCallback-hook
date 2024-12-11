import { useCallback, useState } from 'react'
import './App.css'
import { List } from './List'

function App() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)

  const getItems = useCallback(() => {
    return [number, number+1, number+2]
  },[number])

  const theme = {
    backgroundColor : dark ? "#333" : "#FFF",
    color : dark ? "#FFF" : "#333",
  }

  return (
    <div style= {theme} className='App'>
      <h1>useCallback hook working</h1>
      <input className='input' type='number' value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button className='btn' onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
      <List getItems = {getItems} />
    </div>
  )
}

export default App
