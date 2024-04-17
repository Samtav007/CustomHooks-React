import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StorageComponent from './Components/storage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StorageComponent />
    </>
  )
}

export default App