import { useState } from "react";
import StarwarsSearch from "./StarwarsSearch";
import StarwarsList from "./StarwarsList";
import CharacterDetail from "./CharacterDetail";
import ICharacter from "../model/ICharacter";

function App() {
  
  const [resultado, setResultado] = useState(Array<ICharacter>());
  const [seleccionado, setSeleccionado] = useState<ICharacter | null>(null);


  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            App
          </a>
        </div>
      </nav>
      
      <div className="container">
        <StarwarsSearch onResults={(data) => setResultado(data)}></StarwarsSearch>
        <p>Search results: {resultado.length}</p>
        
        <div className="row">
          <div className="col-8">
            <StarwarsList products={resultado} onSelect={data => setSeleccionado(data)}></StarwarsList>
          </div>

          <div className="col-4">
            <CharacterDetail p={seleccionado}></CharacterDetail>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
