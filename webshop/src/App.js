import { Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Shops from "./pages/Shops"; // imporditud on default kaudu: export default shops
import {ContactUs} from "./pages/ContactUs"; // imporditud const kaudu: export const contactus
import SingleProduct from "./pages/SingleProduct";
import AdminHome from "./pages/admin/AdminHome";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import MaintainCategories from "./pages/admin/MaintainCategories";
import MaintainProducts from "./pages/admin/MaintainProducts";
import MaintainShops from "./pages/admin/MaintainShops";
import NavigationBar from "./components/NavigationBar";



function App() {
  // const { t, i18n } = useTranslation();

  // const changeLang = (newLang) => {
  //   i18n.changeLanguage(newLang);
  //   localStorage.setItem("language", newLang);
  // }

  return (
    <div className="App">

      <NavigationBar />

{/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin">{t("admin")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("shops")}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
            <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
          </Nav>
          <img className="lang" onClick={() => changeLang("ee")} src="/estonia.png" alt="" />
          <img className="lang" onClick={() => changeLang("en")} src="/united-kingdom.png" alt="" />
          <img className="lang" onClick={() => changeLang("es")} src="/spain.png" alt="" />
          
        </Container>
      </Navbar> */}
      
      
     <Routes>
      <Route path="" element={ <HomePage /> } />
      <Route path="cart" element={ <Cart /> } />
      <Route path="shops" element={ <Shops /> } />
      <Route path="contact" element={ <ContactUs /> } />
      <Route path="product" element={ <SingleProduct /> } />
      <Route path="admin" element={ <AdminHome /> } />
      <Route path="admin/add-product" element={ <AddProduct /> } />
      <Route path="admin/edit-product/:productId" element={ <EditProduct /> } />
      <Route path="admin/maintain-categories" element={ <MaintainCategories /> } />
      <Route path="admin/maintain-products" element={ <MaintainProducts /> } />
      <Route path="admin/maintain-shops" element={ <MaintainShops /> } />

     </Routes>
    </div>
  );
}

export default App;
