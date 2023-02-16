import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
// import NavigationBar from "./components/NavigationBar";
import Homepage from "./pages/Homepage";
import Employees from "./pages/Employees";
import Products from "./pages/Products";
import Shops from "./pages/Shops";

function App() {
  return (
    <div className="App">
      
      <Link to="/homepage">
        <button className="nupp">Homepage</button>
      </Link>

      <Link to="employees">
        <button className="nupp">Employees</button>
      </Link>

      <Link to="/products">
        <button className="nupp">Products</button>
      </Link>

      <Link to="/shops">
        <button className="nupp">Shops</button>
      </Link>

      <Routes>
        <Route path="homepage" exact element={ <Homepage />} />
        <Route path="products" exact element={ <Products /> } />
        <Route path="employees" exact element={ <Employees /> } />
        <Route path="shops" exact element={ <Shops /> } />
      </Routes>
    </div>
  );
}

export default App;