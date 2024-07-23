import { useState } from "react";
import Areias from "./components/Areias";
import Alegre from "./components/Alegre";
import Buritizal from "./components/Buritizal";
import Charito from "./components/Charito";
import Conceicao from "./components/Conceicao";
import Goes from "./components/Goes";
import Holanda from "./components/Holanda";
import NBetania from "./components/NBetania";
import Pissarreira from "./components/Pissarreira";


function App() {
  const [olt, setOlt] = useState('');

  const renderizaOlt = () => {
    switch (olt) {
      case 'alegre': 
        return <Alegre />
      case 'areias': 
        return <Areias />
      case 'buritizal': 
        return <Buritizal />
      case 'charito': 
        return <Charito />
      case 'conceicao':
        return <Conceicao />
      case 'goes':
        return <Goes />
      case 'holanda':
        return <Holanda />
      case 'nova betania': 
        return <NBetania />
      case 'pissarreira': 
        return <Pissarreira />
      default: 
      return <p>Selecione uma OLT</p>;
    }
  }
  return (
    <>
      <div className="container">
        <h1 className="title">Escolha a OLT abaixo</h1>
        <select onChange={(e) => setOlt(e.target.value)}>
          <option value={''}></option>
          <option value={'alegre'}>ALEGRE</option>
          <option value={'areias'}>AREIAS</option>
          <option value={'buritizal'}>BURITIZAL</option>
          <option value={'charito'}>CHARITO</option>
          <option value={'conceicao'}>CONCEIÇÃO</option>
          <option value={'goes'}>GOES</option>
          <option value={'holanda'}>HOLANDA</option>
          <option value={'nova betania'}>NOVA BETANIA</option>
          <option value={'pissarreira'}>PISSARREIRA</option>
        </select>

        <div className="items">
          {renderizaOlt()}
        </div>
      </div>
    </>
  )
}

export default App
