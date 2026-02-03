
import './App.css'
import Cabecalho from './components/Cabecalho'

function App() {
  function tratarTeste(){
    console.log("clicou")
  }

  return (
    <>
      <Cabecalho />
      <h1>Hello React</h1>
      <p>paragrafo normal</p>
      <button onClick={tratarTeste}>Teste</button>
    </>
  )
}

export default App
