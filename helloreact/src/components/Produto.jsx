import React from 'react'
import './Produto.css'
function Produto(props) {
  
    return (
    <div className='card-produto'>
        <p>Produto: {props.p.nome}</p>
        <p>Produto: {props.p.preco}</p>
        <p>Produto: {props.p.descricao}</p>

    </div>
  )
}

export default Produto