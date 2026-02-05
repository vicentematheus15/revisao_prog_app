import './App.css'
import Cabecalho from './components/Cabecalho'
import Imesada from './components/Imesada'
import ListaProdutos from './components/ListaProdutos'

  function App(){
    
    return (
      <div className='conteiner-app'>
      <Cabecalho />
      <ListaProdutos/>
      {/* <Imesada/> */}
    </div>
  )
}


export default App
