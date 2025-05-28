import { useState } from 'react'
import FormularioOuvidoria from './components/FormOuvidoria'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
        <FormularioOuvidoria />
      </div>

    </>
  )
}

export default App
