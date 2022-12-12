
import { Link, Route, Routes} from "react-router-dom" ;
import './App.css';
import Avaleht from "./pages/Avaleht";
import LisaToode from "./pages/LisaToode";
import Ostukorv from "./pages/Ostukorv";
import Meist from "./pages/Meist";
import Poed from "./pages/Poed";
import Seaded from "./pages/Seaded";

function App() {
  return (
    <div className="App">

      <Link to="/avaleht">
        <img className="pilt" src="https://www.koeratoit.ee/media/wysiwyg/6BD96F36-C806-4BA5-ADF3-2B43D720A741_002_.jpg" alt="" />
      </Link>
      
      <Link to="/ostukorv">
        <button className="nupp">Ostukorvi</button>
      </Link>

      <Link to="lisa-toode">
        <button className="nupp">Toodet lisama</button>
      </Link>

      <Link to="/meist">
        <button className="nupp">Meist</button>
      </Link>

      <Link to="/poed">
        <button className="nupp">Poed</button>
      </Link>

      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>


      <Routes>
        <Route path="avaleht" element={ <Avaleht />} />
        <Route path="ostukorv" element={ <Ostukorv />} />
        <Route path="lisa-toode" element={ <LisaToode />} />
        <Route path="meist" element={ <Meist />} />
        <Route path="poed" element={ <Poed />} />
        <Route path="seaded" element={ <Seaded />} />
      </Routes>
      
    </div>
  );
}
export default App;
