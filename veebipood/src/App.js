
import { Link, Route, Routes} from "react-router-dom" ;
import './App.css';
import Avaleht from "./pages/Avaleht";
import LisaToode from "./pages/LisaToode";
import Ostukorv from "./pages/Ostukorv";
import Meist from "./pages/Meist";
import Poed from "./pages/Poed";
import Seaded from "./pages/Seaded";
import Tooted from "./pages/Tooted";
import HaldaTooteid from './pages/HaldaTooteid';
import MuudaToode from './pages/MuudaToode';
import YksikToode from './pages/YksikToode';

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

      <Link to="/tooted">
        <button className="nupp">Tooted</button>
      </Link>

      <Link to="/halda-tooteid">
        <button className="nupp">Halda tooteid</button>
      </Link>


      <Routes>
        <Route path="avaleht" element={ <Avaleht />} />
        <Route path="ostukorv" element={ <Ostukorv />} />
        <Route path="lisa-toode" element={ <LisaToode />} />
        <Route path="meist" element={ <Meist />} />
        <Route path="poed" element={ <Poed />} />
        <Route path="seaded" element={ <Seaded />} />
        <Route path="tooted" element={ <Tooted />} />
        <Route path="halda-tooteid" element={ <HaldaTooteid />} />
        <Route path="muuda/:i" element={ <MuudaToode />} /> 
        <Route path="toode/:index" element={ <YksikToode />} />
      </Routes>
      
    </div>
  );
}
export default App;
