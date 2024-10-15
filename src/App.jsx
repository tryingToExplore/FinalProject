import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RandomButton from './components/Button'
import SpecificVerse from './components/Specific'
import Players from './Players'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
      <h1>Bible Verse </h1>
      <RandomButton/>
      <SpecificVerse/>
      <Players />
    </>
    </>
  )
}

export default App
