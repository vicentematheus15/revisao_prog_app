import { useState } from 'react'
import './Imesada.css'

function Imesada() {
    const [saldo, setSaldo] = useState(0)
    const [inputValor, setInputValor] = useState('')
    const [inputDescricao, setInputDescricao] = useState('')
    const [movimentacoes, setMovimentacoes] = useState([])

    function creditarValor(){
        setSaldo(saldo + Number(inputValor))
        
        setMovimentacoes([...movimentacoes, {
          tipo: "Crédito",
          valor: inputValor,
          id: Date.now(),
          descricao: inputDescricao
        }])

        setInputValor("")
        setInputDescricao("")
    }

    function debitarValor(){
       setSaldo(saldo - Number(inputValor))
        
        setMovimentacoes([...movimentacoes, {
          tipo: "Débito",
          valor: inputValor,
          id: Date.now(),
          descricao: inputDescricao
        }])

        setInputValor("")
        setInputDescricao("")
    }

  return (
    <>
    <div className='container-imesada'>
      <div className="form-imesada">
        <img src="./imgs/porco.jpg" alt="" className='imagem-porco'/>
        <h2>Imesada</h2>
        <h4>Controlinho Financeiro</h4>
        <h5>💰Saldo: R${saldo.toFixed(2)}💸 </h5>
        <input type="text" 
            value={inputDescricao}
            onChange={(event)=> {setInputDescricao(event.target.value)}}
            />
        <input type="text" 
            value={inputValor}
            onChange={(event)=> {setInputValor(event.target.value)}}
            />
        
        <div className='buttons'>
            <button className='btCreditar' onClick={creditarValor}>Creditar</button>
            <button className='btDebitar' onClick={debitarValor}>Debitar</button>
        </div>
        <div className="card-movimentacoes">
          📄 Relatório Kowalski 🐧
          {movimentacoes.map((m) => (
            <div key={m.id} className='card-movimentacao'>
              <p>{m.descricao}</p>
              <p> R${m.valor}</p>
              <p>{m.tipo}</p>
            </div>
           ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Imesada

// import React, { useState } from 'react'
// import './Imesada.css'


// function Imesada() {
//     const [saldo, setSaldo] = useState(0);
//     const [inputValor, setInputValor] = useState('');
//     const [movimentacoes, setMovimentacoes] = useState([
//         {tipo: 'crédito', valor: 10, id: Date.now(), descricao: 'Agiotagem'}
//     ])

//     function creditar(){
//         setSaldo(saldo + Number(inputValor))

//         setInputValor('')
//     }
//     function debitar(){
//         setSaldo(saldo - Number(inputValor))
//         setInputValor('')
//     }


//     function atualizarValor(e){
//         setInputValor(e.target.value)
//     }

//     return (
//         <div className={"container-imesada"}>
//             <div className="form-imesada">
//                 <img src="./imgs/porco.png" alt="" className="imagem-porco"  />
//                 <h2>iMesada</h2>
//                 <p>Controlinho financeiro</p>
//                 <p>💰Saldo: R${saldo}💸</p>
//                 <input type="number"
//                     value={inputValor}
//                     onChange={atualizarValor}
//                 />
//                 {/* {inputValor} */}
//                 <div className="botoes">
//                     <button onClick={creditar}>Creditar</button>
//                     <button onClick={debitar}>Debitar</button>
//                 </div>
//                 <div className={"render-cards"}>
//                     {movimentacoes.map( (m) => (
//                         <div key={m.id} className={m.tipo}>
//                             <p>{m.descricao}</p>
//                         </div>
//                     ) )}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Imesada