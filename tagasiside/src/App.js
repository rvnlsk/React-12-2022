import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';
import Tegevused from './pages/Tegevused';
import Kasutajad from './pages/Kasutajad';

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/tagasiside">
        <button>Tagasiside lehele</button>
      </Link>
      <Link to="/andjad">
        <button>Vaata, kes tagasisidet on andnud</button>
      </Link>
      <Link to="/tegevused">
        <button>Vaata, mis ylesandeid veel tegema pead</button>
      </Link>
      <Link to="/kasutajad">
        <button>Vaata kasutajaid</button>
      </Link>
      <Routes>
        <Route path="/" exact element={<div>Tere</div>} />
        <Route path="/tagasiside" exact element={ <Tagasiside />} />
        <Route path="/andjad" exact element={ <TagasisideAndjad />} />
        <Route path="/tegevused" exact element={ <Tegevused /> } />
        <Route path="/kasutajad" exact element={ <Kasutajad /> } />
      </Routes>
      
    </div>
    
  );
}

export default App;
