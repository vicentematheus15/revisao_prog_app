import './App.css'
import Cabecalho from './components/Cabecalho'
import { useState } from 'react'

function App() {
  const [cont, setCont] = useState(0)
  const [inputPreco, setInputPreco] = useState('')

  function tratarTeste(){
    setCont(cont+1)
  }

  return (
    <>
      <Cabecalho />
      <h1>Hello React</h1>
      <p>paragrafo normal</p>
      <input type="text" 
        value={inputPreco}
        onChange={(event) => setInputPreco(event.target.value)}
      />
      {inputPreco}
      <button onClick={tratarTeste}>Teste</button>
      {cont}
    </>
  )
}

export default App
