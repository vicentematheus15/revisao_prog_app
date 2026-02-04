import { useState } from 'react'
import './Imesada.css'

function Imesada() {
    const [saldo, setSaldo] = useState(0)
    const [inputValor, setInputValor] = useState('')

    function creditarValor(){
        let valor = Number(inputValor)
        setSaldo(saldo + valor)
    }

    function debitarValor(){
        let valor = Number(inputValor)
        setSaldo(saldo - valor)
    }

  return (
    <>
    <h2>Imesada</h2>
    <h4>Controlinho Financeiro</h4>
    <h5>💰Saldo: R${saldo.toFixed(2)} </h5>
    <input type="text" 
        value={inputValor}
        onChange={(event)=> {setInputValor(event.target.value)}}
    />
    
    <div className='botoes'>
    <button onClick={creditarValor}>Creditar</button>
    <button onClick={debitarValor}>Debitar</button>
    </div>
    </>
  )
}

export default Imesada