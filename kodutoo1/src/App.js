
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import { useState } from 'react';
import { useRef } from 'react';

function App() {
    const [sisselogitud, muudaSisselogitud] = useState("ei");
    const [sonum, muudaSonum] = useState("");
    const kasutajaNimiRef = useRef();
    const paroolRef = useRef();

    const logiSisse = () => {
      if (paroolRef.current.value === "123") {
      muudaSisselogitud("jah");
      muudaSonum("Oled sisselogitud");
      muudaSonum(kasutajaNimiRef.current.value + " oled sisselogitud");
      } else {
        muudaSonum("Vale parool");
      }

    }

  return (
   <div className="App">
    <div>{sonum}</div>
    { sisselogitud === "ei" && <div>
    <label>Kasutajanimi</label> <br/>
    <input ref={kasutajaNimiRef} type="text" /> <br />
    <label>Parool</label> <br />
    <input ref={paroolRef} type="password" /> <br />
    </div> }

    { sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button> }
   { sisselogitud === "jah" && <button onClick={() => muudaSisselogitud("ei")}>Logi välja</button> }

    <Link to="/">
      <button>Avaleht</button>
    </Link>
    <Link to="/kontakt">
      <button>Kontakt</button>
    </Link>
    <Link to="/meist">
      <button>Meist</button>
    </Link>
    <Link to="/seaded">
      <button>Seadetesse</button>
    </Link>


    <Routes>
      <Route path='' element={ <Avaleht /> } />
      <Route path= "kontakt" element={ <Kontakt /> } />
      <Route path= "meist" element={ <Meist /> } />
      <Route path= "seaded" element={ <Seaded /> } />
    </Routes>

  </div>
  );
}

export default App;
