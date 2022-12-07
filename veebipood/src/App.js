
import { Link, Route, Routes} from "react-router-dom" ;
import './App.css';
import Avaleht from "./pages/Avaleht";
import LisaToode from "./pages/LisaToode";
import Ostukorv from "./pages/Ostukorv";

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

     


      <Routes>
        <Route path="avaleht" element={ <Avaleht />} />
        <Route path="ostukorv" element={ <Ostukorv />} />
        <Route path="lisa-toode" element={ <LisaToode />} />
      </Routes>
      
    </div>
  );
}
export default App;
