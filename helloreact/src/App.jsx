import './App.css'
import Cabecalho from './components/Cabecalho'
import { useState } from 'react'

function App() {
  const [cont, setCont] = useState(0)
  const [inputPreco, setInputPreco] = useState('')
  const [dobro, setDobro] = useState('')

  function tratarTeste(){
    setCont(cont+1)
  }

  function calcularDobro(){
    let valor = inputPreco
    setDobro(valor * 2)
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
      <div className="resultado">
      <button onClick={calcularDobro}>Dobrar</button>
        Dobro do número: {dobro}
      </div>
    </>
  )
}

export default App
