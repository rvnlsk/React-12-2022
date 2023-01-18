import { Link } from "react-router-dom";
import config from "../data/config.json";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";


function HomePage() {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.productsDbUrl)
    .then(res => res.json())
    .then(json => {
      setProducts(json);
      setDbProducts(json);
      setLoading(false);
    });
  }, []);
 

  const addToCart = (productClicked) => {
    let cartLS = localStorage.getItem("cart");
    cartLS = JSON.parse(cartLS) || [];
    const index = cartLS.findIndex(element => element.product.id === productClicked.id);
    if (index >=0) {

      cartLS[index].quantity = cartLS[index].quantity + 1; 
    } else {
    cartLS.push({"product": productClicked, "quantity": 1});
  }
    cartLS = JSON.stringify(cartLS);
    localStorage.setItem("cart", cartLS);
    toast.success(t("Added to cart!"), {"position": "bottom-right", "theme": "dark"});
  }
  
  const filterByCategory = (categoryClicked) => {
    const result = dbProducts.filter(element => element.category === categoryClicked);
    setProducts(result);
  }

  const categories = [...new Set(dbProducts.map(element => element.category))];

  const sortAZ = () => {
    products.sort((a, b) => a.name.localeCompare(b.name));
    setProducts(products.slice());
  }

  const sortZA = () => {
    products.sort((a, b) => b.name.localeCompare(a.name));
    setProducts(products.slice());
  }

  const sortPriceAsc = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  }

  const sortPriceDesc = () => {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  }

  const sortDateAsc = () => {
    products.sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf());
    setProducts(products.slice());
  }

  const sortDateDesc = () => {
    products.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
    setProducts(products.slice());
  }


  if (isLoading === true) {
  return (<Spinner />)
  }
  
  return (
    <div>
      <button onClick={sortAZ}>Sorteeri A-Z</button>
      <button onClick={sortZA}>Sorteeri Z-A</button>
      <button onClick={sortPriceAsc}>Hind kasvavalt</button>
      <button onClick={sortPriceDesc}>Hind kahanevalt</button>
      <button onClick={sortDateAsc}>Sorteeri hiljem lisatud enne</button>
      <button onClick={sortDateDesc}>Sorteeri varem lisatud enne</button>
      <div>{products.length}tk</div>
      {/* <button onClick={() => filterByCategory("belts")}>belts</button>
      <button onClick={() => filterByCategory("headphones")}>headphones</button> */}
      {categories.map(element => <button onClick={() => filterByCategory(element)}>{element}</button>)}
       <ToastContainer />
        {products.map(element =>
        <div key={element.id}>
          <Link to={"/product/" + element.id}>
          <img src={element.image} alt="" />
          <div>{element.id}</div>
          <div>{element.name}</div>
          <div>{element.price}</div>
          </Link>
          <div>{element.image}</div>
          <div>{element.catecory}</div>
          <div>{element.description}</div>
          <div>{element.active}</div>
          <button onClick={() => addToCart(element)}>Add to cart</button>
          </div>)}
    </div>
  )
}


/* <img src={element.image} alt="" />
          <div>unikaalsuse tunnus (URLi saatmisel, .map sees key, kustutamisel) - {element.id} - genereerisin ise</div> 
          <div>{element.name} - täispikk nimi, mina võtsin 3 esimest sõna</div>
          <div>ostukorvi kogusumma - {element.price} - võtsin dollari järgse hinna, aga kui oli 2 hinda from to, siis suurema</div>
          <div>{element.image} - pildi URL lehel</div>
<div>kategooria alusel filtreerimist - {element.category} - mis panime otsingusse</div>
          <div>seda näeb vaid peale klikkides (üksik toode) - {element.description} - täispikk nimi</div>
          <div>mitteaktiivseid tooteid ei näita välja - {element.active} - kõigile panin active true'ks</div> */
          // <button>Lisa ostukorvi</button>

export default HomePage;