import Produto from "./Produto"
import './ListaProdutos.css'
import { useState } from "react"

function ListaProdutos() {

    const [produtos, setProdutos] = useState([
        {id: Date.now(), nome: "Garrafa", preco: 30, descricao: "Garrafa do Relâmpago Marquinhos"},
        {id: Date.now()+1, nome: "Camisa", preco: 80, descricao: "Camisa do Relâmpago Marquinhos"},
        {id: Date.now()+2, nome: "Tênis", preco: 130, descricao: "Tênis do Relâmpago Marquinhos"}
    ])

    function cadastrarProduto(){
    
        const produto = {
            id: Date.now(),
            nome: prompt("Digite o nome do produto:"),
            preco: prompt("Preço:"),
            descricao: prompt("Descrição: ")
        }

        setProdutos([...produtos, produto])
    }

  return (

    <div>
        <p>ListaProdutos</p>
        <button onClick={cadastrarProduto}>
            <img src="./icons/subway--add.svg" alt="" />
        </button>

        <div className="render-cards">
            {produtos.map((prod) => (
                <Produto p={prod} key={prod.id}/>
            ))}
        </div>
    </div>
  )
}

export default ListaProdutos