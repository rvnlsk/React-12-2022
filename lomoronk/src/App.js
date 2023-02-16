import './App.scss';
import { Routes, Route } from "react-router-dom"; 
import Layout from "./components/Layout";
import Sidebar from './components/Sidebar';
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
// import Home from './components/Home'




function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="home" element={<Home />} /> */}
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          
        </Route>
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes> */}
    </>
  );
}



export default App; 
