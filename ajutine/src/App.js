import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import {Contact} from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Shops from "./pages/Shops";

function App() {
  return (
    <div className="App">
   
   <Sidebar />
   <div className="content">
   <Routes>
    <Route path="/" element={ <Home /> } />
    <Route path="/about" element={ <About /> } />
    <Route path="/contact" element={ <Contact /> } />
    <Route path="/portfolio" element={ <Portfolio /> } />
    <Route path="/shops" element={ <Shops /> } />
   </Routes>
   </div>
      
    </div>
  );
}

export default App;
